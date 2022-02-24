//import modules
const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");

// create app object to create rest services
const app = express();

// enable cors policy
app.use(cors());

// set MIME type as communication language between server and client
app.use(express.json());

// create client for mongodb connetion
const ashokIT = mongodb.MongoClient;

//create get producs API
app.get("/products", (req, res) => {
    ashokIT.connect("mongodb+srv://admin:admin@cluster0.sjddx.mongodb.net/redux-middleware?retryWrites=true&w=majority", (err, connection) => {
        if (err) throw err;
        else {
            const db = connection.db("redux-middleware");
            db.collection("products").find().toArray((err, array) => {
                if (err) throw err;
                else {
                    res.send(array);
                }
            })
        }
    })
});

app.listen(8080, ()=> {
    console.log("app listening to port number 8080");
});