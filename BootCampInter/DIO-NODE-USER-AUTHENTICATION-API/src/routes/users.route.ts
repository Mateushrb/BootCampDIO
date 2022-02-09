import { NextFunction, Request, Response, Router, } from "express";
import { StatusCodes } from 'http-status-codes';

// 1 - get /users
// 2 - get /users/:uuid
// 3 - post /users
// 4 - put /users/uuid
// 5 - delete /users/:uuid

const usersRoute = Router();

// 1 //
usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: 'Mateus' }];
    res.status(StatusCodes.OK).json({users});
})

// 2 //
usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(200).send({ uuid });
})

// 3 //
usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    res.status(StatusCodes.CREATED).send(newUser);
});

// 4 //
usersRoute.put('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;
    res.status(StatusCodes.OK).send(modifiedUser);
});

// 5 //
usersRoute.delete ('users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.sendStatus(StatusCodes.OK);
})

export default usersRoute;
