# changelog

all notable changes to this project will be documented in this file.

the format is loosely based on [keep a changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [semantic versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0]

### fixed

- fix package.json bin entry
- fix bin/sort.js chmod

### changed

- sort: changed `"type"` field to be next to `"private"`

### removed

- removed `stringify` option

## [0.3.1]

### added

- added types

## [0.3.0]

### changed

- changed sorting for dependencies, so dependencies starting with @ are now at the top
- changed changelog.md

## [0.2.0] - 2021-08-24

### added

- cli: added "spj" to bins
- cli: added logs

### changed

- changed sorting to be more in line with [the npm recommendation](https://docs.npmjs.com/cli/v7/configuring-npm/package-json), but also more personalized
- `let` -> `const`

## [0.1.1] - 2021-06-20

### added

- support for string and buffer
- automatically stringify result
- option to disable stringify

## [0.1.0] - 2021-06-20

### added

- initial release
