import { Request, Response } from "express";
import { getPhotos, getPhotosByUserId } from "./PhotosController";
import * as jwt from 'jsonwebtoken';
import config from '../../config';


export default [
  { 
    path: "/photos",
    method: "get",
    handler: [
        (req: Request, res: Response) => {
          const token = <string>req.headers["auth"];            
          let jwtPayload = <any>jwt.verify(token, config.jwtSecret);  
          console.log(jwtPayload.userId);                         
          const result = getPhotosByUserId(parseInt(jwtPayload.userId));
          res.status(200).send(result);
      }
    ]
  },
  {
    path: "/photos/:id",
    method: "get",
    handler: [
        (req: Request, res: Response) => {
        const result = getPhotos(parseInt(req.params.id));
        res.status(200).send(result);
      }
    ]
  }
];