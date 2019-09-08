import { Request, Response } from "express";
import { getAllUsers } from "./UsersController";

export default [
  { /**Get all users. Whether authenticated or not */
    path: "/users",
    method: "get",
    handler: [
        (req: Request, res: Response) => {
        const result = getAllUsers();
        res.status(200).send(result);
      }
    ]
  }
];