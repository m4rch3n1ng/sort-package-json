/**
 * sort object
 * @param {Record<string, any>} object any object
 * @param {string[]} sortKeys sorted keys
 * @returns {Record<string, any>}
 */
function sortWith ( object, sortKeys ) {
	const objectKeys = sortKeys.concat(Object.keys(object).sort()).filter(( el, i, all ) => all.indexOf(el) == i)

	/** @type {Record<string, any>} */
	let nObj = {}
	objectKeys.forEach(( key ) => {
		if (key in object) nObj[key] = object[key]
	})
	
	return nObj
}


/**
 * sort object
 * @param {Record<string, any>} val any object
 * @param {(([d1]: [string, any], [d2]: [string, any]) => number) | string[] | boolean} sortField sorted keys
 * @returns {Record<string, any>}
 */
export function sortObject ( val, sortField ) {
	if (typeof sortField === "function") {
		return Object.fromEntries(
			Object.entries(val).sort(sortField)
		)
	} else {
		return sortWith(val, Array.isArray(sortField) ? sortField : [])
	}
}
