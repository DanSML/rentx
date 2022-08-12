import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthencticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthencticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body

    const authencticateUserUseCase = container.resolve(AuthencticateUserUseCase)

    const token = await authencticateUserUseCase.execute({password, email})

    return response.json(token)
  }
}