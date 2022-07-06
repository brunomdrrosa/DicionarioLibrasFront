import { User } from "@prisma/client";
import { Request, Response } from "express";
import prisma from "../prisma";

interface IUserController {
  index(req: Request, res: Response): Promise<void>;
  create(req: Request, res: Response): Promise<void>;
}

class UserController implements IUserController {
  async index(req: Request, res: Response): Promise<void> {
    try {
      const users: User[] = await prisma.user.findMany();

      res.status(200).send(users);
    } catch (error: unknown) {
      console.log(error);

      res.status(404).send({
        message: "Não foi possível encontrar os usuários cadastrados",
        error,
      });
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      await prisma.user.create({
        data: {
          ...req.body,
        },
      });

      res.status(201).send();
    } catch (error: unknown) {
      console.log(error);

      res.status(500).send({ message: "Não foi possível se cadastrar", error });
    }
  }
}

export default new UserController();
