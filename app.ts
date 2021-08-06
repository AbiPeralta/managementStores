
import express from 'express';
import "reflect-metadata";
import { createConnection } from 'typeorm';
import  dotenv from 'dotenv';
import path from 'path';
import couponsRoutes from './src/routes/couponsRoutes';
import storesRoutes from './src/routes/storesRoutes';



dotenv.config({ path: path.resolve(__dirname, '../.env') });
const app = express();
createConnection();


//middleware

app.use(express.json());

//routes

app.use(couponsRoutes);
app.use(storesRoutes);











app.listen(3306);