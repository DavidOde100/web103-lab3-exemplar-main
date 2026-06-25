import dotenv from 'dotenv'
import pg from 'pg'
const { Pool } = pg;

dotenv.config({ path: '../.env' })

export const pool = new Pool({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT) || 5432,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
})

export default pool;
