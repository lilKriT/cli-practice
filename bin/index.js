#! /usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import boxen from "boxen";
import figlet from "figlet";

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

const boxenOptions = {
  title: "hello_cli",
  titleAlignment: "right",
  borderColor: "cyan",
  borderStyle: "round",
  padding: { top: 2, left: 3, right: 3, bottom: 0 },
  margin: 1,
  dimBorder: true,
  float: "left",
};

// console.log(boxen(`CLI says hello, ${argv.name}`, boxenOptions));
figlet(argv.name, { font: "3D-ASCII" }, function (err, data) {
  if (err) {
    console.log("Sorry, something went wrong with figlet...");
    console.dir(err);
    return;
  }
  console.log(boxen(data, boxenOptions));
  //   console.log(data);
});

// console.log(argv);
