import { Employee, employees } from './employees';
import { formatEmployees } from './utils/format';

type Predicate = (employee: Employee) => boolean;

function selection(source: Employee[], predicate: Predicate): Employee[] {
  return source.filter(predicate);
}

function selectEmployeesOlderThan(age: number): Employee[] {
  return selection(employees, (employee) => employee.idade > age);
}

function selectEmployeesByGender(gender: Employee['genero']): Employee[] {
  return selection(employees, (employee) => employee.genero === gender);
}

function selectEmployeeByName(name: string): Employee[] {
  const normalizedName = name.toLowerCase();
  return selection(
    employees,
    (employee) => employee.nome.toLowerCase() === normalizedName,
  );
}

function printSection(title: string, data: Employee[]): void {
  console.log(`\n=== ${title} ===`);
  console.log(formatEmployees(data));
}

printSection('Funcionários com mais de 50 anos', selectEmployeesOlderThan(50));
printSection('Funcionários do gênero feminino', selectEmployeesByGender('F'));
printSection('Funcionário com nome João', selectEmployeeByName('João'));
