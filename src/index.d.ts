interface anyObject {
	[ key: string ]: any
}

export default function sort ( pkg: anyObject, { stringify }?: { stringify: boolean }): string | anyObject
