import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser  from "cookie-parser"
import NotFoundPageError from "./app/middleware/notFound";
import router from "./app/routes";
import globalErrorHandler from "./app/middleware/globalError";
const app: Application = express();


// Middleware to handle CORS requests
app.use(cors({
  origin:[
    'http://localhost:5173',
    "https://japanolearn.netlify.app"

  ],
  credentials: true,
}));
// Middleware to parse JSON requests
app.use(express.json());
// Middleware to parse cookies
app.use(cookieParser())

// define routes
app.use('/api' , router)

// not found page
app.use(NotFoundPageError)

// global error handler
app.use(globalErrorHandler)

app.get("/", (req: Request, res: Response) => {
  res.send("this is server home page!");
});



export default app;
