import "reflect-metadata";
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import { createConnection, getConnectionOptions } from 'typeorm'
import path from 'path';
import routes from './routes'

dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();
(async function () {
  const connectionOptions = await getConnectionOptions();
  const connection = await createConnection(connectionOptions);
})();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Middlewares
app.use(cors());
//app.use(express.json());
app.use(morgan('dev'));

// routes
app.use(routes);

app.listen(3000);
console.log('Server on port', 3000);