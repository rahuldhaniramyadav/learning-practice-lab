const express = require('express'); // it will return a createApplication function from node_modules\express\lib\express.js
const databaseConn = require('./config/database'); // backend\src\config\database,js
const createApp = express();


databaseConn().then(() => {
    console.log("database connected successfully");
    // when our database is connected only then our server listen the request
    createApp.listen(5450, () =>  {
        console.log("Server is running and listning on port 5450");
    });
}).catch((err) => {console.log(err.message);});
