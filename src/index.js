import { sortObject } from "./utils.js"
import fields from "./fields.js"

export default function sort ( pkg ) {
	if (typeof pkg == "string" || Buffer.isBuffer(pkg)) pkg = JSON.parse(pkg)

	let nPkg = Object.fromEntries(
		Object.entries(pkg).map(([ key, val ]) => {
			const field = fields.find(( f ) => f.key == key)

			if (!field || !field.sort || typeof val != "object") return [ key, val ]

			if (!Array.isArray(val)) {
				return [
					key,
					typeof field.sort == "function"
						? Object.fromEntries(Object.entries(val).sort(field.sort))
						: sortObject(val, Array.isArray(field.sort) ? field.sort : [])
				]
			} else {
				if (!Array.isArray(field.sort)) {
					return [ key, val.sort() ]
				} else {
					return [
						key,
						val.map(( v ) => {
							if (typeof v != "object") return v

							if (!Array.isArray(v)) {
								return typeof field.sort == "function"
									? Object.fromEntries(Object.entries(v).sort(field.sort))
									: sortObject(v, Array.isArray(field.sort) ? field.sort : [])
							} else {
								return val.sort()
							}
						})
					]
				}
			}
		})
	)
	nPkg = sortObject(nPkg, fields.map(({ key }) => key))

	return nPkg
}
