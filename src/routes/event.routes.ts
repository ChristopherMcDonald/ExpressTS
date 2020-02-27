import { Router } from "express";
import ash from 'express-async-handler';
import EventService from "../services/event.service";

const eventRouter = Router();

/**
 * @swagger
 * /api/event:
 *  get:
 *      summary: GET /api/event
 *      description: Fetches all events
 *      responses:
 *          200:
 *              description: Returns all events
 *              schema:
 *                  type: array
 *                  items:
 *                      $ref: "#/definitions/Event"
 */
eventRouter.get('/', ash(async (req, res) => {
    res.send(await EventService.fetchEvents());
}));

/**
 * @swagger
 * /api/event/:id:
 *  get:
 *      summary: GET /api/event/<id>
 *      description: Fetches event with ID
 *      responses:
 *          200:
 *              description: Returns the event
 *              schema:
 *                  $ref: "#/definitions/Event"
 */
eventRouter.get('/:id', ash(async (req, res) => {
    const { id } = req.params;
    res.send(await EventService.fetchEvent(id));
}));

export default eventRouter;