import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateClientUsecase } from "../../domain/usecases/AuthenticateClientUsecase";

export class AuthenticateClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const createClientUsecase = container.resolve(AuthenticateClientUsecase);

    const result = await createClientUsecase.execute({ username, password });

    return response.status(200).json({ accessToken: result })
  }
}