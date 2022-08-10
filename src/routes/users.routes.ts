import { Router } from "express"
import { CreateUsercontroller } from "../modules/accounts/useCases/createUser/CreateUserController"

export const usersRoutes = Router()

const createUsercontroller = new CreateUsercontroller()

usersRoutes.post("/", createUsercontroller.handle)
