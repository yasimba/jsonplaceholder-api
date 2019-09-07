import { Request, Response } from "express";
import { getAllUsers } from "./UsersController";

export default [
  {
    path: "/users",
    method: "get",
    handler: [
        ({ query }: Request, res: Response) => {
        const result = getAllUsers();
        res.status(200).send(result);
      }
    ]
  }
];