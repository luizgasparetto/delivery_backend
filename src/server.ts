import 'reflect-metadata';
import 'express-async-errors';

import 'dotenv/config';

import cors from "cors";
import express, { Request, Response, NextFunction } from "express";

import "./core/infra/container";

import { routes } from './core/infra/routes';
import { AppError } from './core/shared/errors/AppError';

const app = express();

app.use(cors())
app.use(express.json());

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message });
  }

  return response.status(500).json({ message: "Unknown server error", error: err.message });
});

app.listen(process.env.PORT, () => console.log("Server is running..."));