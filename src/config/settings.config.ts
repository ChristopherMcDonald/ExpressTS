import dotenv from 'dotenv';
import { boolean } from 'boolean';

// pulls from .env in src directory
dotenv.config();

const { NODE_ENV, PORT, JWT_SECRET, DEBUG } = process.env as { [key: string]: string };

// pulls in env-specific variables, like CORS
dotenv.config({ path: `./env/.env.${NODE_ENV?.toLowerCase()}` });

const { USE_CORS } = process.env as { [key: string]: string };

// all values exporteds should be in the correct type, not all strings
const port = Number(PORT);
const cors = boolean(USE_CORS);
export {
    NODE_ENV,
    port as PORT,
    JWT_SECRET,
    DEBUG,
    cors as USE_CORS,
};