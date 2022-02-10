import { Pool } from 'pg';

const connectionString = 'LINK DO BANCO DE DADOS'
const db = new Pool({ connectionString });

export default db;
