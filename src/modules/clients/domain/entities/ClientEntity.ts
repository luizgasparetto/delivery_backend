import { v4 as uuidV4 } from "uuid";

export class ClientEntity {
  id: string;
  username: string;
  password: string;
  createdAt: Date;
  updatedAt?: Date;

  constructor(id: string, username: string, password: string, createdAt: Date, updatedAt?: Date) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt
  }
}