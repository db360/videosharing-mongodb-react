import jwt from 'jsonwebtoken';
import { createError } from './error.js';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token  // cogemos el token
    if(!token) return next(createError(401, "You are not authenticated!")) //si no hay token error

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user)=> { // verificar el token
        if(err) return next(createError(403, "Token is not valid!"))
        req.user = user; //asignamos el objeto jwt a la req.user
        next();

    })
}