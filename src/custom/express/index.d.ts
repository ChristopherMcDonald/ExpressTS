import Token from "../../types/token.type";
import { Request } from 'express';

/**
 * Adds a <code>token</code> attritube to Express' request object
 */
declare global {
    namespace Express {
        interface Request {
            token: Token;
            trace: string;
        }
    }
}