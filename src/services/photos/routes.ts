import { Request, Response } from "express";
import { getPhotos, getPhotosById } from "./PhotosController";

export default [
  {
    path: "/photos/:id",
    method: "get",
    handler: [
        (req: Request, res: Response) => {
        const result = getPhotosById(parseInt(req.params.id));        
        res.status(200).send(result);
      }
    ]
  },
  {
    path: "/photos",
    method: "get",
    handler: [
        (req: Request, res: Response) => {
        const result = getPhotos();
        res.status(200).send(result);
      }
    ]
  }
];