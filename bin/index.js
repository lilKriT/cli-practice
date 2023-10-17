#! /usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import boxen from "boxen";

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

console.log(
  boxen(`CLI says hello, ${argv.name}`, {
    title: "hello_cli",
    titleAlignment: "right",
    borderColor: "cyan",
    borderStyle: "round",
    padding: 1,
    margin: 1,
    dimBorder: true,
    float: "left",
  })
);

// console.log(argv);
