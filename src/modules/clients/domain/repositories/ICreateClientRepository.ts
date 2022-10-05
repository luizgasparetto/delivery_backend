import { CreateClientParams } from "../params/CreateClientParams";

interface IClientRepository {
  createClient({ username, password }: CreateClientParams): Promise<void>;
  clientAlreadyExists(username: string): Promise<boolean>;
}

export { IClientRepository };