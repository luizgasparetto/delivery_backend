import { Router } from "express";
import { AuthenticateClientController } from "../../../modules/clients/presenter/controllers/AuthenticateClientController";
import { CreateClientController } from "../../../modules/clients/presenter/controllers/CreateClientController";

const clientRoutes = Router();

const createClientController = new CreateClientController();
const authenticateClientController = new AuthenticateClientController();

clientRoutes.post("/", createClientController.handle);
clientRoutes.post("/auth", authenticateClientController.handle);

export { clientRoutes };