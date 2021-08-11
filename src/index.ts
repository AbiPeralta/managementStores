import "reflect-metadata";  
import express from 'express';
import morgan from 'morgan';
import  dotenv from 'dotenv';
import cors from 'cors';
import { createConnection } from 'typeorm'
import path from 'path';
import routes from './routes'

dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();
createConnection();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use(routes);

app.listen(3000);
console.log('Server on port', 3000);