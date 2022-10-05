import { CreateClientParams } from "../../domain/params/CreateClientParams";
import { IClientRepository } from "../../domain/repositories/ICreateClientRepository";

import { prisma } from "../../../../core/services/database/PrismaClient";
import { hash } from "bcryptjs";


export class ClientRepositoryImpl implements IClientRepository {
  async createClient({ username, password }: CreateClientParams): Promise<void> {
    const hashPassword = await hash(password, 10)

    await prisma.clients.create({ data: { username, 'password': hashPassword } });
  }


  async clientAlreadyExists(username: string): Promise<boolean> {
    const clientExists = await prisma.clients.findFirst({
      where: { username: { mode: "insensitive" } }
    })

    return clientExists != null;
  }
}