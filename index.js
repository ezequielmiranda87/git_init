//https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const files = require("./lib/files");
const inquirer = require("./lib/inquirer");
const configstore = require("configstore");
const github = require("./lib/github");
async function main() {
  clear();

  console.log(
    chalk.yellow(figlet.textSync("GIT INIT", { horizontalLayout: "full" }))
  );

  if (files.directoryExists(".git")) {
    console.log(chalk.red("Already a GIT repository"));
    process.exit();
  }

  //   const credentials = await inquirer.askGithubCredentials();
  //   console.log(credentials);
}

main();
