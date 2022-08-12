import { Router } from "express"
import { AuthencticateUserController } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserController"

const authenticateRoutes = Router()

const authencticateUserController = new AuthencticateUserController()

authenticateRoutes.post("/sessions", authencticateUserController.handle)

export { authenticateRoutes }