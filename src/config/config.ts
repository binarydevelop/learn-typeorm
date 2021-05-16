import dotenv from 'dotenv';

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT;
const SERVER_HOST = process.env.SERVER_HOST;

const SERVER = {
    hostname: SERVER_HOST,
    port: SERVER_PORT
};

const config = {
    server: SERVER
}

export default config;