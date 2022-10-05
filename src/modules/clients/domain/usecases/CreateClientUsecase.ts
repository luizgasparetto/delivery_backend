import { AppError } from "../../../../core/errors/AppError";
import { inject, injectable } from "tsyringe";

import { CreateClientDTO } from "../dtos/CreateClientDTO";
import { IClientRepository } from "../repositories/ICreateClientRepository";

@injectable()
export class CreateClientUsecase {
  constructor(
    @inject("ClientRepository")
    private clientRepository: IClientRepository
  ) { }

  async execute({ username, password }: CreateClientDTO): Promise<void> {
    const clientExists = await this.clientRepository.clientAlreadyExists(username);

    if (clientExists) {
      throw new AppError("Client already exists", 409);
    }

    if (password.length < 6) {
      throw new AppError("Your password must have at least 6 caracters")
    }

    await this.clientRepository.createClient({ username, password });
  }
}