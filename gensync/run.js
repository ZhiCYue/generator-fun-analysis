const fs = require("fs");
const gensync = require("gensync");
 
const readFile = gensync({
  sync: fs.readFileSync,
  errback: fs.readFile,
});
 
const myOperation = gensync(function* (filename) {
  const code = yield* readFile(filename, "utf8");
 
  return "// some custom prefix\n" + code;
});
 
// Load and add the prefix synchronously:
const result = myOperation.sync("./some-file.js");
 
// Load and add the prefix asynchronously with promises:
myOperation.async("./some-file.js").then(result => {
    console.log(result)
});
 
// Load and add the prefix asynchronously with promises:
myOperation.errback("./some-file.js", (err, result) => {
 
});