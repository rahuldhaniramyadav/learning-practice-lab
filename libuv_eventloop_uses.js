console.log("START");

const https = require('https');
const fs = require('fs');


setImmediate(() => {
    console.log("setImmediate");
});

setTimeout(() => {
    console.log("setTimeout");
}, 100);

Promise.resolve("promise").then(console.log);

fs.readFile("./test.txt", "utf-8", (err, data) => {
    setTimeout(() => {
        console.log("setTimeout inside readFile");
    }, 100);

    process.nextTick(() => console.log("process nextTick"));

    setImmediate(() => {
        console.log("setImmediate inside readFile");
    });
});

function updateDa(a) {
    return a;
}

console.log(updateDa(5));

console.log("END");

// START
// 5
// END
// promise
// setImmediate
// process nextTick
// setImmediate inside readFile
// setTimeout
// setTimeout inside readFile