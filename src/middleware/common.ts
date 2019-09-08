import { Request, Response, NextFunction } from "express";
import { Router } from "express";
import cors from "cors";
import parser from "body-parser";
import * as jwt from "jsonwebtoken";
import compression from "compression";
import config from '../config';

/*Check Json web token to make sure that an authenticated user is accessing authorized routes*/
const checkJwt = (req: Request, res: Response, next: NextFunction) => {   
  //Token must be in header when making a request
  const token = <string>req.headers["auth"];  
  let jwtPayload;  
  try {
    jwtPayload = <any>jwt.verify(token, config.jwtSecret);        
    console.log("Token verified")
  } catch (error) {
    res.send("Unauthorized access. Please use a valid Token or generate a new one using: http://localhost:3000/newToken and pass it via header.");
    return;
  }  
  //move on to next middleware
  next();
};

export const handleCors = (router: Router) =>
  router.use(cors({ credentials: true, origin: true }));

export const handleBodyRequestParsing = (router: Router) => {
  router.use(parser.urlencoded({ extended: true }));
  router.use(parser.json());
};

export const handleCompression = (router: Router) => {
  router.use(compression());
};

/* These are our authorized routes. Verify jwt before allowing access*/
export const handleAuthentication = (router: Router) => {
  router.use('/albums',checkJwt);
  router.use('/photos',checkJwt);
  router.use('/photos/:id',checkJwt);
  router.use('/albums/:id',checkJwt);
};