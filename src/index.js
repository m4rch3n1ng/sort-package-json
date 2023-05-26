import { sortObject } from "./utils.js"
import fields from "./fields.js"

/**
 * sort pkg content
 * @param {string} key key
 * @param {unknown} val thing
 * @returns {unknown}
 */
function sortPkgVal ( key, val ) {
	const field = fields.find(( f ) => f.key == key)

	if (typeof val !== "object" || val === null) return val
	if (!field || !("sort" in field) || !field.sort) return val

	if (!Array.isArray(val)) {
		return sortObject(val, field.sort)
	}

	if (!Array.isArray(field.sort)) {
		return val.sort()
	} else {
		return val.map(( v ) => {
			if (typeof v !== "object") {
				return v
			}

			if (Array.isArray(v)) {
				return v.sort()
			} else {
				return sortObject(v, field.sort)
			}
		})
	}
}

/**
 * sort package.json
 * @param {Record<string, unknown>} pkg package.json
 * @returns {Record<string, unknown>} the sorted package
 */
export default function sort ( pkg ) {
	const nPkg = Object.fromEntries(
		Object.entries(pkg).map(([ key, val ]) => {
			const sortVal = sortPkgVal(key, val)
			return [ key, sortVal ]
		})
	)

	const sortPkg = sortObject(nPkg, fields.map(({ key }) => key))
	return sortPkg
}
