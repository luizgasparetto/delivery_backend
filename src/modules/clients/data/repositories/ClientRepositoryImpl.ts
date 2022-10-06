import { CreateClientDTO } from "../../domain/dtos/CreateClientDTO";
import { IClientRepository } from "../../domain/repositories/ICreateClientRepository";

import { prisma } from "../../../../core/shared/services/database/PrismaClient";
import { hash } from "bcryptjs";
import { ClientEntity } from "../../domain/entities/ClientEntity";
import { ClientEntityAdapter } from "../adapters/ClientEntityAdapter";


export class ClientRepositoryImpl implements IClientRepository {
  async createClient({ username, password }: CreateClientDTO): Promise<void> {
    const hashPassword = await hash(password, 10)

    await prisma.clients.create({ data: { username, 'password': hashPassword } });
  }


  async getClient(username: string): Promise<ClientEntity> {
    const client = await prisma.clients.findFirst({
      where: { username: { mode: "insensitive" } }
    })

    return ClientEntityAdapter.fromDb(client);
  }
}