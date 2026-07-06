console.log("START");

const https = require('https');
const fs = require('fs');
const crypto = require('node:crypto');

process.env.UV_THREADPOOL_SIZE = 2;

crypto.pbkdf2("rahu123", "NODEJS", 1000000, 72, "sha512", (err, key) => {
    console.log("This is A");
});
crypto.pbkdf2("rahu123", "NODEJS", 1000000, 72, "sha512", (err, key) => {
    console.log("This is B");
});
crypto.pbkdf2("rahu123", "NODEJS", 1000000, 72, "sha512", (err, key) => {
    console.log("This is C");
});
crypto.pbkdf2("rahu123", "NODEJS", 1000000, 72, "sha512", (err, key) => {
    console.log("This is D");
});
crypto.pbkdf2("rahu123", "NODEJS", 1000000, 72, "sha512", (err, key) => {
    console.log("This is E");
});

// fs.readFile("./test.txt", "utf-8", (err, data) => {
//     console.log("A");
// });
// fs.readFile("./test.txt", "utf-8", (err, data) => {
//     console.log("B");
// });
// fs.readFile("./test.txt", "utf-8", (err, data) => {
//     console.log("C");
// });
// fs.readFile("./test.txt", "utf-8", (err, data) => {
//     console.log("D");
// });
// fs.readFile("./test.txt", "utf-8", (err, data) => {
//     console.log("E");
// });

console.log("END");

// START
// END
// This is A
// This is B // wait 
// This is C
// This is D // wait
// This is E