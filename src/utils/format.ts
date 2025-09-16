import { Employee } from '../employees';

export function formatEmployees(data: Employee[]): string {
  if (data.length === 0) {
    return 'Nenhum registro encontrado.';
  }

  const headers = ['CPF', 'Nome', 'Sobrenome', 'Idade', 'Gênero', 'Salário'];
  const rows = data.map((employee) => [
    employee.cpf,
    employee.nome,
    employee.sobrenome,
    employee.idade.toString(),
    employee.genero,
    employee.salario.toFixed(2),
  ]);

  const columnWidths = headers.map((header, index) =>
    Math.max(header.length, ...rows.map((row) => row[index].length)),
  );

  const formatRow = (row: string[]) =>
    row
      .map((cell, index) => cell.padEnd(columnWidths[index], ' '))
      .join(' | ');

  const separator = columnWidths
    .map((width) => ''.padEnd(width, '-'))
    .join('-+-');

  return [formatRow(headers), separator, ...rows.map(formatRow)].join('\n');
}
