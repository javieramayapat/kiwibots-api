import * as functions from "firebase-functions";
import app from "./app"


const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
const DATABASE_URL = process.env.DATABASE_URL

// Initialize the app with a custom auth variable, limiting the server's access
// The database URL depends on the location of the database
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `${DATABASE_URL}`
});

// Routes
app.use(require("./routes/bots.routes"));
app.use(require("./routes/delivers.routes"));

// Indicates firebase that has a express server running 
export const api = functions.https.onRequest(app);