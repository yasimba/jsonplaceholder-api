import { Request, Response } from "express";
import { getAlbums, getAlbumsByUserId } from "./AlbumsController";
import * as jwt from 'jsonwebtoken';
import config from '../../config';

export default [
  {
    path: "/albums",
    method: "get",
    handler: [
        (req: Request, res: Response) => {
          const token = <string>req.headers["auth"];            
          let jwtPayload = <any>jwt.verify(token, config.jwtSecret);                                          
          const result = getAlbumsByUserId(parseInt(jwtPayload.userId))
          res.status(200).send(result);          
      }
    ]
  },
  {
    path: "/albums/:id",
    method: "get",
    handler: [
        (req: Request, res: Response) => {
        const result = getAlbums(parseInt(req.params.id));
        res.status(200).send(result);
      }
    ]
  }
];

