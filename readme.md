# @m4rch/sort-package-json

a package to sort your package.json

the package.json will be indented using tabs and have a newline at the end

this project is inpired by [keithamus](https://github.com/keithamus)' [sort-package-json](https://github.com/keithamus/sort-package-json), but works with a fraction of the dependencies

# use

you can either install it globally

```
$ npm i @m4rch/sort-package-json -g
```

and then use it via

```
$ sort-package-json
```

or you can use npx

```
$ npx @m4rch/sort-pacakge-json
```

# api

you can import the package via

## main

```js
import sortPackage from "@m4rch/sort-package-json"
```

and then use it

```js
/*
	get the package content
*/

let sorted = sortPackage(pkg)

/*
	write the sorted package back using fs and JSON.stringify()
*/
```

`sortPackage` takes two arguments:

- `pkg`
- `options`

`pkg` is either an object, a string or a buffer and is the content of the package.json file

`options` (optional) is an object containing the options you want to give to the sorter. current options are
- `stringify`: whether or not to stringify the result (default: `true`)

## handler

or you can import the handler

```js
import handler from "@m4rch/sort-package-json"
```

and just give as only argument the path (relative to where you execute the command)

```js
handler(".")
```
