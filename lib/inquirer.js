const inquirer = require("inquirer");
const files = "fs";

module.exports = {
  askGithubCredentials: () => {
    const questions = [
      {
        name: "username",
        type: "input",
        message: "Enter your Github username or e-mail address",
        validate: value => {
          if (value.length) {
            return true;
          } else {
            return "Please enter your username or e-mail address";
          }
        }
      },
      {
        name: "password",
        type: "password",
        message: "Enter your password",
        validate: value => {
          if (value.length) {
            return true;
          } else {
            return "Please enter your username or e-mail address";
          }
        }
      }
    ];

    return inquirer.prompt(questions);
  }
};
