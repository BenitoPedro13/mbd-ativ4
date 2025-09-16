import mysql from 'mysql2/promise';

const {
  DB_HOST = '127.0.0.1',
  DB_PORT = '3306',
  DB_USER = 'uva',
  DB_PASSWORD = 'uva123',
  DB_NAME = 'empresa_db',
} = process.env;

export const connectionConfig = {
  host: DB_HOST,
  port: Number(DB_PORT),
  user: DB_USER,
  password: DB_PASSWORD,
  multipleStatements: true,
};

export async function getConnection() {
  return mysql.createConnection({ ...connectionConfig, database: DB_NAME });
}

export async function getServerConnection() {
  return mysql.createConnection(connectionConfig);
}
