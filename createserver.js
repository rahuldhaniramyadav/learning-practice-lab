const http = require('node:http');

const ryServer = http.createServer((req, res) => {

    if (req.url === '/rahul') {
        res.end("This is rahul server");
    }
    res.end("This is server testing");

});

ryServer.listen(5450);