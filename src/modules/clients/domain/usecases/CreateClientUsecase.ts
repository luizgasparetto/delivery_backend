import { AppError } from "../../../../core/errors/AppError";
import { inject, injectable } from "tsyringe";

import { CreateClientParams } from "../params/CreateClientParams";
import { IClientRepository } from "../repositories/ICreateClientRepository";

@injectable()
export class CreateClientUsecase {
  constructor(
    @inject("ClientRepository")
    private clientRepository: IClientRepository
  ) { }

  async execute({ username, password }: CreateClientParams): Promise<void> {
    const clientExists = await this.clientRepository.clientAlreadyExists(username);

    if (clientExists) {
      throw new AppError("Client already exists", 409);
    }

    await this.clientRepository.createClient({ username, password });
  }
}