import express, { Application, Request, Response } from "express";
import cors from "cors";
import NotFoundPageError from "./app/middleware/notFound";
import router from "./app/routes";
const app: Application = express();

// Middleware to handle CORS requests
app.use(cors());
// Middleware to parse JSON requests
app.use(express.json());

// define routes
app.use('/api' , router)

// not found page
app.use(NotFoundPageError)

app.get("/", (req: Request, res: Response) => {
  res.send("this is server home page!");
});



export default app;
