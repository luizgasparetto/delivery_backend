import { Request, Response } from "express";
import { CreateClientUsecase } from "../../domain/usecases/CreateClientUsecase";

export class CreateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const createClientUsecase = new CreateClientUsecase();

    const result = await createClientUsecase.execute({ username, password });

    return response.status(201).json(result)
  }
}