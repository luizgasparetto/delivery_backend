import { CreateClientParams } from "../params/CreateClientParams";

interface ICreateClientRepository {
  createClient({ username, password }: CreateClientParams): Promise<void>;
  clientAlreadyExists(username: string): Promise<boolean>;
}

export { ICreateClientRepository };