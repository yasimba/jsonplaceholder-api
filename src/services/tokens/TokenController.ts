import * as jwt from "jsonwebtoken";
import config from '../../config';

/**Generate new token for use in authenticated routes */
export const getNewToken = (userId: string) => {     
    const newToken = jwt.sign({ userId:userId }, config.jwtSecret, {
      expiresIn: "1h"
    });    
    console.log(newToken);
    return newToken;
  }