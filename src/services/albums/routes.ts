import { Request, Response } from "express";
import { getAlbums, getAlbumsById } from "./AlbumsController";

export default [
  {
    path: "/albums/:id",
    method: "get",
    handler: [
        (req: Request, res: Response) => {
        const result = getAlbumsById(parseInt(req.params.id));        
        res.status(200).send(result);
      }
    ]
  },
  {
    path: "/albums",
    method: "get",
    handler: [
        (req: Request, res: Response) => {
        const result = getAlbums();
        res.status(200).send(result);
      }
    ]
  }
];