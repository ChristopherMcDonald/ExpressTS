import { getRepository } from "typeorm";
import { User } from "../models";
import { NotFoundError } from "../errors";

export default class UserService {
    /**
     * Fetches a user by ID
     * @param id of the User
     * @throws NotFoundError if not found
     * @returns the User
     */
    static async fetchUser(id: string) {
        const user = await getRepository(User).findOne(id);

        if (!user) {
            throw new NotFoundError(id, 'User');
        }

        return user;
    }

    /**
     * Fetches all users
     * @returns all Users
     */
    static async fetchUsers() {
        return getRepository(User).find();
    }
}