import 'reflect-metadata';
import 'express-async-error';

import express from "express";
import cors from "cors";

import { routes } from './core/routes';
import { ErrorHandler } from './core/errors/ErrorHandler';

const app = express();

app.use(cors())
app.use(express.json());

app.use(routes);

app.use(ErrorHandler.handle);

app.listen(3000, () => console.log("Server is running"));