import { container } from "tsyringe";
import { IClientRepository } from "../../modules/clients/domain/repositories/ICreateClientRepository";
import { ClientRepositoryImpl } from "../../modules/clients/infra/repositories/ClientRepositoryImpl";


container.registerSingleton<IClientRepository>("ClientRepository", ClientRepositoryImpl);