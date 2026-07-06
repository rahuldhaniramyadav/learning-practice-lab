console.log("START");

const https = require('https');
const fs = require('fs');
const crypto = require('node:crypto');

const apiData = https.get('https://jsonplaceholder.typicode.com/todos/1', () => {
    console.log(" API DATA");
})

setTimeout(() => {
    console.log("setTimeout");
}, 100);

fs.readFile("./test.txt", "utf-8", (err, data) => {
    console.log(data);
});

const fileDataSync = fs.readFileSync("./test.txt", "utf-8"); // JS need to run and wait - it block the JS thread and also the task is offload to libuv
console.log(" File data synce", fileDataSync);

// block the main thread 
const cryptoSync = crypto.pbkdf2Sync("Rahu123", "NODEJS", 1000000, 64, "sha512");
console.log("This is sync code ", cryptoSync);

// const key = crypto.pbkdf2Sync(password, salt, iterations, keylen, digest);
crypto.pbkdf2("rahu123", "NODEJS", 1000000, 72, "sha512", (err, key) => {
    console.log("This is async code ");
});

function updateDa(a) {
    return a;
}

console.log(updateDa(5));

console.log("END");

// START
//  File data synce This is used in libuv
// This is sync code  <Buffer 28 52 f1 b7 7a 48 b4 27 c8 c4 33 7c 19 f3 c3 fe 2f 46 3d 8e aa 60 b3 00 7e 99 b8 1c f9 56 bf e3 3e 79 46 2d b3 c3 58 fc 69 fd 59 b2 0f fc fc 70 c8 fa ... 14 more bytes>
// 5
// END
// This is used in libuv
// setTimeout
//  API DATA
// This is async code 
