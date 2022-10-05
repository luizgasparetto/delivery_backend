import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppError";

export class ErrorHandler {
  static handle(err: Error, request: Request, response: Response, next: NextFunction): Response {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({ message: "Unknown server error", error: err.message });
  }
}