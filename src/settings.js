import dotenv from 'dotenv';

dotenv.config();
console.log(process.env.CONNECTION_STRING);
export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
export const connectionString = process.env.CONNECTION_STRING;
