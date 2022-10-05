import { v4 as uuidV4 } from "uuid";

class ClientEntity {
  id?: string;
  name: string;
  password: string;

  constructor(name: string, password: string) {
    this.id = uuidV4();
    this.name = name;
    this.password = password;
  }
}

export { ClientEntity };