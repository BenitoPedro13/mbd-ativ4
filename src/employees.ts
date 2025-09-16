export interface Employee {
  cpf: string;
  nome: string;
  sobrenome: string;
  idade: number;
  genero: 'M' | 'F';
  salario: number;
}

export const employees: Employee[] = [
  {
    cpf: '121111111-11',
    nome: 'João',
    sobrenome: 'Resende',
    idade: 25,
    genero: 'M',
    salario: 5000,
  },
  {
    cpf: '991111111-12',
    nome: 'Pedro',
    sobrenome: 'Smith',
    idade: 22,
    genero: 'M',
    salario: 4000,
  },
  {
    cpf: '471111113-11',
    nome: 'Maria',
    sobrenome: 'Nzagui',
    idade: 54,
    genero: 'F',
    salario: 9000,
  },
  {
    cpf: '251111111-11',
    nome: 'Cleide',
    sobrenome: 'Santos',
    idade: 29,
    genero: 'F',
    salario: 8200,
  },
  {
    cpf: '431111444-11',
    nome: 'Guilherme',
    sobrenome: 'Gomes',
    idade: 33,
    genero: 'M',
    salario: 8000,
  },
  {
    cpf: '232211111-11',
    nome: 'Joana',
    sobrenome: 'Fonseca',
    idade: 47,
    genero: 'F',
    salario: 7852,
  },
];
