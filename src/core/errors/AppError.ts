import { NextFunction, Request, Response } from "express";

export class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }

  static handle(err: Error, request: Request, response: Response, next: NextFunction): Response {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }

    return response.status(500).json({ message: "Unknown server error", error: err.message });
  }
}