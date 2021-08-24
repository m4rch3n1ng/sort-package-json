import { sortObject } from "./utils.js"
import fields from "./fields.js"

export default function sort ( pkg, { stringify = true } = {}) {
	if (typeof pkg == "string" || Buffer.isBuffer(pkg)) pkg = JSON.parse(pkg)

	let nPkg = Object.fromEntries(
		Object.entries(pkg).map(([ key, val ]) => {
			const field = fields.find(( f ) => f.key == key)

			if (!field || !field.sort || typeof val != "object") return [ key, val ]

			if (!Array.isArray(val)) {
				return [ key, sortObject(val, Array.isArray(field.sort) ? field.sort : []) ]
			} else {
				if (!Array.isArray(field.sort)) {
					return [ key, val.sort() ]
				} else {
					return [
						key,
						val.map(( v ) => {
							if (typeof v != "object") return v

							if (!Array.isArray(v)) {
								return sortObject(v, Array.isArray(field.sort) ? field.sort : [])
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

	if (stringify === false) {
		return nPkg
	} else {
		return JSON.stringify(nPkg, null, "\t") + "\n"
	}
}
