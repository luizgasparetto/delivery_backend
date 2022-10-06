import { AppError } from "../../../../core/shared/errors/AppError";
import { inject, injectable } from "tsyringe";

import { CreateClientDTO } from "../dtos/CreateClientDTO";
import { IClientRepository } from "../repositories/ICreateClientRepository";
import { DomainError } from "../../../../core/shared/errors/DomainError";

@injectable()
export class CreateClientUsecase {
  constructor(
    @inject("ClientRepository")
    private clientRepository: IClientRepository
  ) { }

  async execute({ username, password }: CreateClientDTO): Promise<void> {
    const clientExists = await this.clientRepository.getClient(username);

    if (clientExists) {
      throw new DomainError("Client already exists", 409);
    }

    if (password.length < 6) {
      throw new DomainError("Your password must have at least 6 caracters")
    }

    await this.clientRepository.createClient({ username, password });
  }
}