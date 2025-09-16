import 'dotenv/config';
import { RowDataPacket } from 'mysql2/promise';
import { Employee } from '../employees';
import { formatEmployees } from '../utils/format';
import { getConnection } from './connection';

function printSection(title: string, data: Employee[]): void {
  console.log(`\n=== ${title} ===`);
  console.log(formatEmployees(data));
}

type EmployeeRow = Employee & RowDataPacket;

function normalizeEmployee(row: EmployeeRow): Employee {
  return {
    cpf: row.cpf,
    nome: row.nome,
    sobrenome: row.sobrenome,
    idade: Number(row.idade),
    genero: row.genero,
    salario: Number(row.salario),
  };
}

async function queryEmployees(sql: string, params: unknown[] = []) {
  const connection = await getConnection();
  try {
    const [rows] = await connection.execute<EmployeeRow[]>(sql, params);
    return rows.map(normalizeEmployee);
  } finally {
    await connection.end();
  }
}

async function main() {
  const olderThan50 = await queryEmployees(
    'SELECT * FROM funcionarios WHERE idade > ? ORDER BY idade DESC',
    [50],
  );
  printSection('Funcionários com mais de 50 anos', olderThan50);

  const women = await queryEmployees(
    "SELECT * FROM funcionarios WHERE genero = 'F' ORDER BY nome",
  );
  printSection('Funcionários do gênero feminino', women);

  const joao = await queryEmployees(
    'SELECT * FROM funcionarios WHERE nome = ? LIMIT 10',
    ['João'],
  );
  printSection('Funcionário com nome João', joao);
}

main().catch((error) => {
  console.error('Erro ao executar consultas:', error);
  process.exit(1);
});
