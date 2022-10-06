import { container } from "tsyringe";
import { IClientRepository } from "../../../modules/clients/domain/repositories/ICreateClientRepository";
import { ClientRepositoryImpl } from "../../../modules/clients/data/repositories/ClientRepositoryImpl";

// Clients
container.registerSingleton<IClientRepository>("ClientRepository", ClientRepositoryImpl);