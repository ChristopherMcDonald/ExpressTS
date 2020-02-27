import { Router } from "express";
import ash from 'express-async-handler';
import UserService from "../services/user.service";

const userRouter = Router();

/**
 * @swagger
 * /api/user:
 *  get:
 *      summary: GET /api/user
 *      description: Fetches all users
 *      responses:
 *          200:
 *              description: Returns all users
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: "#/definitions/User"
 */
userRouter.get('/', ash(async (req, res) => {
    res.send(await UserService.fetchUsers());
}));

/**
 * @swagger
 * /api/user/:id:
 *  get:
 *      summary: GET /api/user/<id>
 *      description: Fetches user with ID
 *      responses:
 *          200:
 *              description: Returns the user
 *              schema:
 *                  $ref: "#/definitions/User"
 */
userRouter.get('/:id', ash(async (req, res) => {
    const { id } = req.params;
    res.send(await UserService.fetchUser(id));
}));

export default userRouter;