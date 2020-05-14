import { createTables, insertIntoTables } from './queryFunctions';

const createTables
(async () => {
  await createTables();
  await insertIntoTables();
})();
