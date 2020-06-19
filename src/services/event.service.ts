import { getRepository } from "typeorm";
import { Event } from "../models";
import { NotFoundError } from "../errors";

export default class EventService {
    /**
     * Fetches an event by ID
     * @param id of the Event
     * @throws NotFoundError if not found
     * @returns the Event
     */
    static async fetchEvent(id: string) {
        const event = await getRepository(Event).findOne(id);

        if (!event) {
            throw new NotFoundError('Event', id);
        }

        return event;
    }

    /**
     * Fetches all events
     * @returns all events
     */
    static async fetchEvents() {
        return getRepository(Event).find();
    }
}