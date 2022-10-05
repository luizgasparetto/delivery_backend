import { CreateClientDTO } from "../dtos/CreateClientDTO";

interface IClientRepository {
  createClient({ username, password }: CreateClientDTO): Promise<void>;
  clientAlreadyExists(username: string): Promise<boolean>;
}

export { IClientRepository };