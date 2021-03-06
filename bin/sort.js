#!/usr/bin/env node

import sade from "sade"
import handler from "./handler.js"

sade("sort-package-json [dir]")
	.describe("sorts your package.json")
	.version("v0.2.0")
	.example("")
	.example("project")
	.action(handler)
	.parse(process.argv)
