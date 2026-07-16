const mongoose = require('mongoose');
require('dotenv').config(); // fetching url from the .env

// const dns = require('dns');
// dns.setServers(['8.8.8.8', '1.1.1.1']);

const databaseConn = async () => {
    // this connection only work when we allow our current ip
    await mongoose.connect(process.env.MONGO_URI);
}

module.exports = databaseConn;