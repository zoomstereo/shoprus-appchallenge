import dotenv from 'dotenv';
import { createConnection, getConnection } from "typeorm";

const dotenvResult = dotenv.config();

if (dotenvResult.error) {
    throw dotenvResult.error;
}


const connection = {
    async create() {
        await createConnection();
        console.log("Connected to the db");
    },

    async createTestConnection() {
        await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5433,
            username: process.env.DB_USERNAME,
            password: process.env.PASSWORD,
            database: process.env.DATABASE_NAME,
            synchronize: true,
            logging: false,
            entities: [
                "entity/**/*.entity.ts"
            ],
            migrations: [
                "migration/*.ts"
            ],
            subscribers: [
                "subscriber/*.ts"
            ]
        });
        console.log("Connected to the TEST db");
    },

    async close() {
        await getConnection().close();
    }
}

export { connection };