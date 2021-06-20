import { join } from "path"
import { readFileSync, writeFileSync } from "fs"
import sortPackage from "../src/index.js"

export default function handler ( folder = "." ) {
	const pkgPath = join(process.cwd(), folder, "package.json")

	writeFileSync(
		pkgPath,
		sortPackage(
			readFileSync(pkgPath)
		)
	)
}
