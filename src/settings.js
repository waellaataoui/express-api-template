import dotenv from 'dotenv';

dotenv.config();
export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;
export const connectionString = process.env.test === 'true'
  ? process.env.TEST_DB
  : process.env.CONNECTION_STRING;
