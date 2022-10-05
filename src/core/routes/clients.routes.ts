import { Router } from "express";
import { CreateClientController } from "../../modules/clients/presenter/controllers/CreateClientController";

const clientRoutes = Router();

const createClientController = new CreateClientController();

clientRoutes.post("/", createClientController.handle);

export { clientRoutes };