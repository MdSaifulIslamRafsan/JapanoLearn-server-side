import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

// Middleware to handle CORS requests
app.use(cors());
// Middleware to parse JSON requests
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("this is server home page!");
});



export default app;
