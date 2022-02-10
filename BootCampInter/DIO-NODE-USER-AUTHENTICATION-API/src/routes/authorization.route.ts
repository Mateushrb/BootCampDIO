import { Request, NextFunction, Response, Router } from "express";
import JWT from 'jsonwebtoken';
import { StatusCodes } from "http-status-codes";
import basicAuthenticationMiddleware from "../middlewares/basic-authentication.middleware";
import ForbiddenError from "../models/errors/forbidden.error.model";

const authorizationRoute = Router();

authorizationRoute.post('/token', basicAuthenticationMiddleware, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user;

        if (!user) {
            throw new ForbiddenError('Usuário não informado!');
        }

        const jwtPayload = { username: user.username};
        const jwtOptions = { subject: user?.uuid };
        const secretKey = 'my_secret_key';

        const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);
        
        res.status(StatusCodes.OK).json({ token: jwt });

        // "iss" O domínio da aplicação geradora do token
        // "sub" É o assunto do token mas é muito utilizado para guardar o ID do usuário
        // "aud" Define quem pode usar o token
        // "exp" Data para a expiração do token
        // "nbf" Define uma data para qual o token não pode ser aceito antes dela
        // "iat" Data de criação do token
        // "jti" O id do token

    } catch (error) {
        next(error);
    }
});

export default authorizationRoute;
