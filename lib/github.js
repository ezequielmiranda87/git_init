const CLI = require("clui");
const configstore = require("configstore");
const octokit = require("@octokit/rest");
const spinner = CLI.Spinner;

const inquirer = require("./inquirer");
const pkg = require("../package.json");

const conf = new configstore(pkg.name);

const status = new spinner("Authenticating you, please wait");
status.start();

setTimeout(() => {
  //   status.message("Hiiii");
}, 3000);

module.exports = {
  getInstance: () => {
    return octokit;
  },
  getStoredGithubToken: () => {
    return conf.get("github.token");
  }
};
