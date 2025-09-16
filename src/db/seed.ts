import 'dotenv/config';
import { employees } from '../employees';
import { connectionConfig, getConnection, getServerConnection } from './connection';

const { DB_NAME = 'empresa_db' } = process.env;

const createDatabaseSQL = `CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\``;

const createTableSQL = `
CREATE TABLE IF NOT EXISTS funcionarios (
  cpf VARCHAR(20) PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  sobrenome VARCHAR(50) NOT NULL,
  idade INT NOT NULL,
  genero ENUM('M', 'F') NOT NULL,
  salario DECIMAL(10, 2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
`;

const insertEmployeeSQL = `
INSERT INTO funcionarios (cpf, nome, sobrenome, idade, genero, salario)
VALUES (?, ?, ?, ?, ?, ?)
ON DUPLICATE KEY UPDATE
  nome = VALUES(nome),
  sobrenome = VALUES(sobrenome),
  idade = VALUES(idade),
  genero = VALUES(genero),
  salario = VALUES(salario);
`;

async function ensureDatabase() {
  const serverConnection = await getServerConnection();
  try {
    await serverConnection.query(createDatabaseSQL);
  } finally {
    await serverConnection.end();
  }
}

async function ensureTable() {
  const connection = await getConnection();
  try {
    await connection.query(createTableSQL);
  } finally {
    await connection.end();
  }
}

async function seedEmployees() {
  const connection = await getConnection();
  try {
    const insertPromises = employees.map((employee) =>
      connection.execute(insertEmployeeSQL, [
        employee.cpf,
        employee.nome,
        employee.sobrenome,
        employee.idade,
        employee.genero,
        employee.salario,
      ]),
    );

    await Promise.all(insertPromises);
  } finally {
    await connection.end();
  }
}

async function main() {
  console.log('Iniciando preparação do banco de dados com config:', connectionConfig);
  await ensureDatabase();
  console.log(`Banco de dados "${DB_NAME}" garantido.`);
  await ensureTable();
  console.log('Tabela funcionarios garantida.');
  await seedEmployees();
  console.log('Registros de funcionários sincronizados.');
}

main().catch((error) => {
  console.error('Erro ao preparar banco de dados:', error);
  process.exit(1);
});
