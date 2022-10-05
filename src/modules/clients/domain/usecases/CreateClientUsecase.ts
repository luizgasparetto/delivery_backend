import { CreateClientParams } from "../params/CreateClientParams";
import { prisma } from "../../../../core/services/database/PrismaClient";
import { AppError } from "../../../../core/errors/AppError";
import { hash } from "bcrypt";

export class CreateClientUsecase {
  async execute({ username, password }: CreateClientParams) {
    const clientExists = await prisma.clients.findFirst({
      where: { username: { mode: "insensitive" } }
    });

    if (clientExists) {
      throw new AppError("Client already exists", 409);
    }

    const hashPassword = await hash(password, 10);

    const client = await prisma.clients.create({
      data: { username, 'password': hashPassword }
    });

    return client;
  }
}