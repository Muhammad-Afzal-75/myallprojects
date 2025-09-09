import express from 'express';
const app = express()
import dotenv from 'dotenv';
import { dbconnection } from './config/dbconnection.js';
import productroutes from './routes/productroutes.js';
import cors from 'cors';
import routesuser from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';
import routes from './routes/cartRoutes.js';
dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true, 
  })
);
dbconnection();
app.use(cookieParser())
// console.log(`mongo.durl:${process.env.dbconnection}`)
app.use("/api", productroutes)
app.use("/api", routesuser)
app.use("/api", routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 