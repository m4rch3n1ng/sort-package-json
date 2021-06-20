export function sortObject ( object, sortWith = [] ) {
	let objectKeys = sortWith.concat(Object.keys(object).sort()).filter(( el, i, all ) => all.indexOf(el) == i)

	let nObj = {}
	objectKeys.forEach(( key ) => {
		if (key in object) nObj[key] = object[key]
	})
	
	return nObj
}
