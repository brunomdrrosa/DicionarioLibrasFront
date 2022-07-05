import { Request, Response } from "express";

export const giveGreetings = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    res.status(200).send({
      greetings: "Hello, World! Have a nice coding, Rian Oliveira ;)",
    });
  } catch (error) {
    console.log(error);

    res.status(404).send({ greetings: "I can't say hello :(", error });
  }
};
