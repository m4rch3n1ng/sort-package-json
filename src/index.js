import { sortObject } from "./utils.js"
import fields from "./fields.js"

export default function sort ( pkg ) {
	let nPkg = Object.fromEntries(
		Object.entries(pkg).map(([ key, val ]) => {
			let field = fields.find(( f ) => f.key == key)

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

	return sortObject(nPkg, fields.map(({ key }) => key))
}
