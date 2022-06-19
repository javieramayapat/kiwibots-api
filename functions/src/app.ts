import * as express from "express";
import * as cors from "cors";


// Express and cors configuration to recive request in a open way
const app = express();
app.use(cors({ origin: true }));

export default app;