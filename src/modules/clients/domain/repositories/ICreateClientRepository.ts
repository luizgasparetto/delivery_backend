import { CreateClientDTO } from "../dtos/CreateClientDTO";
import { ClientEntity } from "../entities/ClientEntity";

interface IClientRepository {
  createClient({ username, password }: CreateClientDTO): Promise<void>;
  getClient(username: string): Promise<ClientEntity>;
}

export { IClientRepository };