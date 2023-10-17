# CLI Tool

This is my first attempt at making my own CLI tool. Created by lilKriT.

# Steps

- `mkdir`
- `pnpm init`
- create `bin/index.js`
- add a **shebang** like `#! /usr/bin/env node`
- set `bin/index.js` as `main` in your `package.json`
- in `package.json` add `bin: { "mycli": "./bin/index.js}`
- you can install it `pnpm link -g`
- remove with `pnpm remove -g toolname`

# Useful libraries:

- `yargs`
- `boxen`
- `chalk`
- `figlet`
