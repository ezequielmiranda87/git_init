const fs = require("fs");
const path = require("path");

module.exports = {
  getCurrentDirectoryBase: () => {
    console.log(path.basename(process.cwd()));
    return path.basename(process.cwd());
  },
  directoryExists: filePath => {
    return fs.existsSync(filePath);
  }
};
