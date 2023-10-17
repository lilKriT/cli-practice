#! /usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv))
  .usage("Usage: $0 <command> [options]")
  .command("hello", "Greet user")
  .example("hello -n Elliot", "Greet user Elliot")
  .alias("n", "name")
  .nargs("n", 1)
  .describe("n", "Name of user")
  .demandOption(["n"])
  .help("h")
  .alias("h", "help")
  .epilog("Created by lilKriT").argv;

console.log("CLI says hello,", argv.name);

// console.log(argv);
