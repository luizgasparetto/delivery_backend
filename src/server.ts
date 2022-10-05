import 'reflect-metadata';
import 'express-async-errors';

import cors from "cors";
import express from "express";

import "./core/container";

import { routes } from './core/routes';
import { AppError } from './core/errors/AppError';

const app = express();

app.use(cors())
app.use(express.json());

app.use(routes);

app.use(AppError.handle);

app.listen(3000, () => console.log("Running on port 3000.."));