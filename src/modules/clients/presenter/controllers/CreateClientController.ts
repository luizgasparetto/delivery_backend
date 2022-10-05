import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateClientUsecase } from "../../domain/usecases/CreateClientUsecase";

export class CreateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const createClientUsecase = container.resolve(CreateClientUsecase);

    await createClientUsecase.execute({ username, password });

    return response.status(201).json({ message: "User created successfully" })
  }
}