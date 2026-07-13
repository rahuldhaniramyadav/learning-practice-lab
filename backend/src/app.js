const express = require('express');
const databaseConn = require('./config/database');
const User = require('./database/model/user');
require('dotenv').config();

const appServer = express();

// appServer.use('/', (req, res) => {
//     res.send("END!!");
// });

// const xmlParser = require('express-xml-bodyparser');
// app.use(xmlParser()); //Parses incoming XML structures
// appServer.use(express.text({ type: 'text/html' })); // Parses html structures
appServer.use(express.json()); // parse/add the json data to JS object

// creating an user
// appServer.post('/signup', async (req, res) => {
    // adding staic data into our collection
    // const userDocument = new User({
    //     firstName: "Rahul",
    //     lastName: "Yadav",
    //     email: "a@a.com",
    //     age: 30,
    //     gender: "male"
    // });
    // adding dyanmic data from req.body
//     const userDocument = new User(req.body);
//     try{
//         await userDocument.save();
//         res.send("user data send successfully");
//     } catch(e) {
//         res.status(401).send("Something went wrong, Please try again!");
//         console.log('Something went wrong, Please try again!', e);
//     }
// });

// fetching document from collection as per email
// appServer.post('/user', async (req, res) => {
//     try{
//         // const userData = await User.find({email: req.body.email});
//         const userData = await User.findOne({email: req.body.email});
//         // if (userData.length !== 0) {
//         if (userData) {
//             res.send(`Found user data ${userData}`);
//         } else {
//             res.send("no user data found!");
//         }
//     } catch(e) {
//         res.status(401).send("Something went wrong, Please try again!");
//         console.log('Something went wrong, Please try again!', e);
//     }
// });

// // fetching all data
// appServer.get('/users', async (req, res) => {
//     try{
//         const userData = await User.find({});
//         if (userData.length !== 0) {
//             res.send(userData);
//         } else {
//             res.send("no user data found!");
//         }
//     } catch(e) {
//         res.status(401).send("Something went wrong, Please try again!");
//         console.log('Something went wrong, Please try again!', e);
//     }
// });

// updating document
appServer.patch('/profile/:id', async (req, res) => {
    try{
        const userId = req.params.id;
        // const userData = await User.findById(userId);
        // userData.firstName = "NewRahul";
        // console.log(userData);
        // await userData.save();
        const userData = await User.findOneAndUpdate({_id: userId}, req.body, { new: true });
        res.send(userData);
    } catch(e) {
        console.log(e);
        res.status(401).send("Something went wrong, Please try again!", e);
    }
});

// updating documents
// appServer.put('/profile/:id', async (req, res) => {
//     try{
//         const userId = req.params.id;
//         const userData = await User.findByIdAndUpdate({_id: userId}, {$set: req.body}, { new: true });
//         res.send(userData);
//     } catch(e) {
//         console.log(e);
//         res.status(401).send("Something went wrong, Please try again!", e);
//     }
// });

// deleting documents
appServer.delete('/profile', async (req, res) => {
    try{
        const userData = await User.deleteOne({email: req.body.email});
        res.send("User data deleted successfully");
    } catch(e) {
        console.log(e);
        res.status(401).send("Something went wrong, Please try again!", e);
    }
});

databaseConn().then(() => {
    appServer.listen(process.env.PORT, () => {
        console.log("server started on port 5450")
    })
}).catch((err) => {
    console.log("there is some connection issue", err);
})
