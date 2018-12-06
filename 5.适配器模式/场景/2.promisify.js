let fs = require("fs");
function promisify(readFile) {
  return function(filename, encoding) {
    return new Promise(function(resolve, reject) {
      readFile(filename, encodeing, function(err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };
}
let readFile = promisify(fs.readFile);
readFile("./1.txt", "utf8").then(data => console.log(data));
