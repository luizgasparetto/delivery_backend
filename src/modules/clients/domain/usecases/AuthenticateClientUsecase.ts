import { compare } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../core/shared/errors/AppError";
import { AuthenticateClientDTO } from "../dtos/AuthenticateClientDTO";
import { IClientRepository } from "../repositories/ICreateClientRepository";

import { sign } from "jsonwebtoken";
import { DomainError } from "../../../../core/shared/errors/DomainError";

@injectable()
export class AuthenticateClientUsecase {
  constructor(
    @inject("ClientRepository")
    private clientRepository: IClientRepository
  ) { }

  async execute({ username, password }: AuthenticateClientDTO): Promise<string> {
    const client = await this.clientRepository.getClient(username);

    const passwordMatch = await compare(password, client.password);

    if (!client || !passwordMatch) {
      throw new DomainError("Username or password invalid!");
    }

    const token = sign({ username }, process.env.HASH, { subject: client.id, expiresIn: "1d" })

    return token;
  }
}