import { BaseError } from ".";

/**
 * Not Found Error, when a lookup for some entity failed
 * Maps to a 404 HTTP code
 */
export default class NotFoundError extends BaseError {
    /**
     * Constructs a new NotFoundError
     * @param id used to find entity
     * @param entity trying to be found, to be appended to 'error.not-found.'
     */
    constructor(id: string, entity: string) {
        super(`${entity} with ID: ${id} was not found`, `not-found.${entity}`, 404);
    }
}