# Universidade Veiga de Almeida / Centro Universitário Jorge Amado
# Disciplina: Modelagem de Banco de Dados
# Prática 5 e Prática 6 – Operador de Álgebra Relacional

- **Integrantes:** _Preencha com o(s) nome(s) completo(s)_
- **Matrícula:** _Informe a matrícula_
- **Data de elaboração:** _Informe a data_

## Base de Dados Utilizada

| CPF           | Nome     | Sobrenome | Idade | Gênero | Salário |
|---------------|----------|-----------|-------|--------|---------|
| 121111111-11  | João     | Resende   | 25    | M      | 5.000,00 |
| 991111111-12  | Pedro    | Smith     | 22    | M      | 4.000,00 |
| 471111113-11  | Maria    | Nzagui    | 54    | F      | 9.000,00 |
| 251111111-11  | Cleide   | Santos    | 29    | F      | 8.200,00 |
| 431111444-11  | Guilherme| Gomes     | 33    | M      | 8.000,00 |
| 232211111-11  | Joana    | Fonseca   | 47    | F      | 7.852,00 |

## Prática 6 – Seleções em Álgebra Relacional

1. **Funcionários com mais de 50 anos** – \( \sigma_{idade > 50}(Funcionarios) \)

   | CPF           | Nome  | Sobrenome | Idade | Gênero | Salário |
   |---------------|-------|-----------|-------|--------|---------|
   | 471111113-11  | Maria | Nzagui    | 54    | F      | 9.000,00 |

2. **Funcionários do gênero feminino** – \( \sigma_{genero = 'F'}(Funcionarios) \)

   | CPF           | Nome   | Sobrenome | Idade | Gênero | Salário |
   |---------------|--------|-----------|-------|--------|---------|
   | 471111113-11  | Maria  | Nzagui    | 54    | F      | 9.000,00 |
   | 251111111-11  | Cleide | Santos    | 29    | F      | 8.200,00 |
   | 232211111-11  | Joana  | Fonseca   | 47    | F      | 7.852,00 |

3. **Funcionário com o nome João** – \( \sigma_{nome = 'João'}(Funcionarios) \)

   | CPF          | Nome | Sobrenome | Idade | Gênero | Salário |
   |--------------|------|-----------|-------|--------|---------|
   | 121111111-11 | João | Resende   | 25    | M      | 5.000,00 |

## Prática 5 – Resultados

> _Descreva aqui os resultados, diagramas ou consultas solicitadas na Prática 5. Inclua tabelas, imagens ou descrições textuais conforme necessário._

## Conclusão

- A aplicação das seleções em álgebra relacional de forma programática auxilia na validação dos resultados antes da elaboração do relatório.
- Os resultados obtidos podem ser exportados ou adaptados para atender ao formato PDF exigido pelo AVA.

## Como gerar o PDF para entrega

1. Abra este arquivo `RELATORIO.md` no editor de sua preferência e substitua os campos destacados.
2. Utilize uma ferramenta de exportação para PDF (por exemplo, a função “Exportar como PDF” do VS Code ou outro conversor Markdown → PDF).
3. Renomeie o arquivo final para `AVA3_SEUNOME.pdf` conforme instruções da atividade.
