import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";
const config = require('./config.js');


const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
const DATABASE_URL = process.env.DATABASE_URL

// Initialize the app with a custom auth variable, limiting the server's access
// The database URL depends on the location of the database
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `${DATABASE_URL}`
});

// db is a reference to y database using the credentials we config 
const db = admin.firestore();


export const helloWorld = functions.https.onRequest((request, response) => {
  response.json({
    message: 'Hello World from kiwibots!'
  });
});

// Express and cors configuration to recive request in a open way
const app = express();
app.use(cors({ origin: true }));


app.get("/index", async (request, response) => {
  response.json({
    message: 'Hello World from Express!'
  })
});


// Indicates firebase that has a express server running 
export const api = functions.https.onRequest(app);