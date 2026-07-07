// npm install mongodb
const { MongoClient } = require('mongodb');

// change the connection url before pushing the code on github
const mongoConnectionUrl = "mongodb+srv://rahuldy143_db_user:<PASSWORD>@rahulcluster.ddelmbp.mongodb.net/";
const dbName = "rymongodb";

const client = new MongoClient(mongoConnectionUrl);

async function getConnection() {
    await client.connect();
    console.log("connected successfully");
    const db = client.db(dbName);
    const collection = db.collection("customers");

    // console.log(collection.find({}).toArray());

    // create the document
    // const insertData = await collection.insertMany([{'firstname': 'rah', 'name': 'RY', 'userage': 20}]);
    // console.log("getDcouments", insertData);

    // const insertDatas = await collection.insertMany([
    //     { _id: 1, name: "SHEKHAR", age: 12 },
    //     { _id: 2, name: "ANIL", age: 12},
    //     { _id: 3, name: "Kishor", age: 12},
    // ]);

    // Reading the data
    const getDcouments = await collection.find({}).toArray();
    console.log("getDcouments", getDcouments);

    // const getDcouments1 = await collection.find({}).toArray();
    // console.log("getDcouments", getDcouments1);

    // Update the data
    const updateDcouments = await collection.updateOne({"firstname":"rah"}, {$set: {"userage": 25}});
    console.log("updateDcouments", updateDcouments);

    // Delete the data
    const deleteDcouments = await collection.deleteMany({"age":12});
    console.log("getDcouments", deleteDcouments);

    return "done";
}

getConnection().then(console.log).catch(console.error).finally(() => client.close());