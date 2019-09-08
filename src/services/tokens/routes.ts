import { Request, Response } from "express";
import { getNewToken } from "./TokenController";
import * as jwt from "jsonwebtoken";
import config from '../../config';

export default [
  { /** Generate new token for a user. Pass in userId to create a token for use in the header when making authenticated requests */
    path: "/newToken/:userId",
    method: "get",
    handler: [
        (req: Request, res: Response) => {
        let userId = req.params.userId;
        const result = getNewToken(userId);        
        res.status(200).send(result);
      }
    ]
  }
];