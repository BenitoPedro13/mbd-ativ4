# Projeto de Álgebra Relacional com MySQL

Este projeto demonstra consultas de seleção em uma tabela de funcionários tanto em memória (TypeScript) quanto em um banco MySQL executando em contêiner Docker. O gerenciador de pacotes recomendado é o **pnpm**.

## Pré-requisitos

- Docker e Docker Compose instalados.
- Node.js 18+ com pnpm (`npm install -g pnpm`) ou utilize uma instalação local de pnpm.

## Configuração rápida

1. Copie o arquivo `.env.example` para `.env` e ajuste as variáveis, se necessário:

   ```bash
   cp .env.example .env
   ```

2. Inicie o banco de dados:

   ```bash
   docker compose up -d
   ```

3. Instale as dependências do projeto:

   ```bash
   pnpm install
   ```

4. Popule o banco com a tabela e os dados da prática:

   ```bash
   pnpm seed
   ```

5. Execute as consultas diretamente no MySQL:

   ```bash
   pnpm db:queries
   ```

6. Caso queira visualizar a lógica em memória (sem banco), execute:

   ```bash
   pnpm start
   ```

7. Quando finalizar, desligue o serviço MySQL:

   ```bash
   docker compose down
   ```

## Estrutura principal

- `docker-compose.yml` – define o serviço MySQL (imagem 8.0) com volume persistente.
- `src/db/seed.ts` – cria o banco/tabela e sincroniza os funcionários.
- `src/db/run-queries.ts` – executa as mesmas seleções da prática diretamente no MySQL.
- `src/index.ts` – mantém a implementação em memória das seleções.
- `RELATORIO.md` – relatório acadêmico com a descrição das consultas.

## Observações

- Em ambientes sem acesso à internet, a instalação das dependências via pnpm precisará ser executada posteriormente quando houver conexão.
- Os dados de exemplo são os mesmos apresentados no enunciado da Prática 6.
