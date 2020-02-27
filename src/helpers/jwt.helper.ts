import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/settings.config';
import Token from '../types/token.type';
import { UnauthorizedError } from '../errors';

/**
 * Signs the payload with the <code>JWT_SECRET</code> property set in the env file
 * @param payload to be signed
 * @returns {string} of the JWT
 */
const sign = (payload: string | object | Buffer) => jwt.sign(payload, JWT_SECRET);

/**
 * Verifies and decodes the JWT provided using the <code>JWT_SECRET</code> property set in the env file
 * @param token 
 */
const verify = (token: string) => {
    try {
        return jwt.verify(token, JWT_SECRET) as Token;
    } catch (err) {
        throw new UnauthorizedError('Invalid JWT Token');
    }
}

export default { sign, verify }; 