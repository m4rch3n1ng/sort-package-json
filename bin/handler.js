import { join } from "path"
import { existsSync, readFileSync, writeFileSync } from "fs"
import sortPackage from "../src/index.js"

export default function handler ( folder = "." ) {
	const pkgPath = join(process.cwd(), folder, "package.json")
	if (!existsSync(pkgPath)) return console.log(`${join(folder, "package.json").replace(/\\/g, "/")} does not exist.`)

	const sortPkg = sortPackage(readFileSync(pkgPath).toString())
	writeFileSync(
		pkgPath,
		JSON.stringify(sortPkg, null, "\t") + "\n"
	)

	console.log(`sorted ${join(folder, "package.json").replace(/\\/g, "/")}`)
}
