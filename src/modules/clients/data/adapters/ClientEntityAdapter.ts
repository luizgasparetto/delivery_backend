import { Clients } from "@prisma/client";
import { ClientEntity } from "../../domain/entities/ClientEntity";

export class ClientEntityAdapter {
  static fromDb(client: Clients): ClientEntity {
    return new ClientEntity(
      client.id,
      client.username,
      client.password,
      client.created_at,
      client.update_at
    );
  }
}