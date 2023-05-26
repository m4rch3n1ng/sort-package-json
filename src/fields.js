const sortURL = [ "type", "url" ]
const sortPeople = [ "name", "email", "url" ]

/**
 * 
 * @param {[string, any]} param0 0
 * @param {[string, any]} param1 0
 * @returns {number}
 */
const sortDeps = ([ d1 ], [ d2 ]) => (
	/^@/.test(d1) === /^@/.test(d2) ? d1.localeCompare(d2) : (d1.startsWith("@") ? -1 : 1)
)

export default [
	{ key: "$schema" },
	{ key: "name" },
	{ key: "displayName" },
	{ key: "version" },
	{ key: "description" },
	{ key: "categories", sort: true },
	{ key: "homepage" },
	{ key: "author", sort: sortPeople },
	{ key: "contributors", sort: sortPeople },
	{ key: "maintainers", sort: sortPeople },
	{ key: "license", sort: sortURL },
	{ key: "publisher" },
	{ key: "bugs", sort: [ "url", "email" ] },
	{ key: "funding", sort: sortURL },
	{ key: "files", sort: true },
	{ key: "main" },
	{ key: "browser" },
	{ key: "keywords", sort: true },
	{ key: "imports" },
	{ key: "exports" },
	{ key: "bin", sort: true },
	{ key: "man" },
	{ key: "directories", sort: true },
	{ key: "repository", sort: sortURL },
	{ key: "scripts", sort: true },
	{ key: "betterScripts", sort: true },
	{ key: "dependencies", sort: sortDeps },
	{ key: "devDependencies", sort: sortDeps },
	{ key: "dependenciesMeta", sort: sortDeps },
	{ key: "peerDependencies", sort: sortDeps },
	{ key: "peerDependenciesMeta", sort: sortDeps },
	{ key: "optionalDependencies", sort: sortDeps },
	{ key: "bundledDependencies", sort: true },
	{ key: "bundleDependencies", sort: true },
	{ key: "extensionPack", sort: true },
	{ key: "extensionDependencies", sort: true },
	{ key: "sideEffects" },
	{ key: "umd:main" },
	{ key: "jsdelivr" },
	{ key: "unpkg" },
	{ key: "module" },
	{ key: "source" },
	{ key: "jsnext:main" },
	{ key: "types" },
	{ key: "typesVersions" },
	{ key: "typings" },
	{ key: "style" },
	{ key: "example" },
	{ key: "examplestyle" },
	{ key: "assets" },
	{ key: "workspaces" },
	{ key: "binary", sort: [ "module_name", "module_path", "remote_path", "package_name", "host", ] },
	{ key: "contributes", sort: true },
	{ key: "activationEvents", sort: true },
	{ key: "husky" },
	{ key: "simple-git-hooks" },
	{ key: "pre-commit" },
	{ key: "commitlint", sort: true },
	{ key: "lint-staged" },
	{ key: "config", sort: true },
	{ key: "nodemonConfig", sort: true },
	{ key: "browserify", sort: true },
	{ key: "babel", sort: true },
	{ key: "browserslist" },
	{ key: "xo", sort: true },
	{ key: "prettier", sort: true },
	{ key: "eslintConfig", sort: true },
	{ key: "eslintIgnore" },
	{ key: "npmpkgjsonlint", sort: true },
	{ key: "remarkConfig", sort: true },
	{ key: "stylelint" },
	{ key: "ava", sort: true },
	{ key: "jest", sort: true },
	{ key: "mocha", sort: true },
	{ key: "nyc", sort: true },
	{ key: "tap", sort: true },
	{ key: "resolutions", sort: true },
	{ key: "flat" },
	{ key: "engines", sort: true },
	{ key: "engineStrict", sort: true },
	{ key: "languageName" },
	{ key: "os" },
	{ key: "cpu" },
	{ key: "type" },
	{ key: "private" },
	{ key: "preferGlobal", sort: true },
	{ key: "publishConfig", sort: true },
	{ key: "icon" },
	{ key: "badges", sort: true },
	{ key: "galleryBanner", sort: true },
	{ key: "preview" },
	{ key: "markdown" }
]
