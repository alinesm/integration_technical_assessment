## 1. Introdução

Esta aplicação é uma implementação de uma API que é executada a cada X minutos, com o objetivo principal de criar duas propriedades com dados de clientes na base da OZmap. Para isso, ela realiza consultas a uma API externa para obter um usuário aleatório e, em seguida, realiza transformações nos dados para criar propriedades na OZmap.

## 2. Tecnologias e Dependências

A aplicação foi desenvolvida com Node.js e Typescript. As principais bibliotecas e ferramentas utilizadas são:

- **Express:** Para criação de endpoints.
- **Axios:** Para efetuar requisições HTTP.
- **Dotenv:** Para gerenciamento de variáveis de ambiente.
- **Cron:** Para executar tarefas em intervalos programados.
- **Winston:** Para registro e monitoramento das atividades da aplicação.

## 3. Funcionalidades

### Processo de Consulta à API:

- Consulta à API externa para obter um usuário aleatório.
- Transformação dos dados do usuário para criar a propriedade no formato esperado pela API da OZmap.
- Verificação da tentativa de criação da propriedade (primeira ou subsequente).
- Criação da propriedade na OZmap.
- Armazenamento dos dados da última propriedade em um arquivo de log.

### Processo de Armazenamento:

- Verificação e validação dos dados antes de criar a propriedade na OZmap.
- Criação da propriedade no OZmap com base nos dados armazenados no arquivo de log.
- Atualização do arquivo de log com dados da última propriedade criada.

## 4. Registro e Visualização de Logs

Os logs da aplicação podem ser acessados de três maneiras:

- Diretamente pelo arquivo "application.log" na raiz do diretório da aplicação, onde os logs são armazenados em formato JSON.
- No arquivo "application.report.txt", também localizado na raiz, apresentando os logs no formato: "[YYYY-MM-DD HH:MM:SS] [NÍVEL] Mensagem de log".
- Através de um navegador, acessando [http://localhost:4000/logs](http://localhost:4000/logs). Ajuste a URL se a aplicação estiver rodando em uma porta diferente.

## 5. API Endpoints

| Método | Path        | Descrição                                                      |
| ------ | ----------- | -------------------------------------------------------------- |
| GET    | /users      | Retorna dados do usuário e da propriedade em formato esperado. |
| POST   | /properties | Cria duas propriedades na base OZmap.                          |
| GET    | /logs       | Exibe os logs da aplicação em formato JSON.                    |

## Instalação

1. Clonar o repositório: `git clone https://github.com/alinesm/integration_technical_assessment/tree/solution/alinesm`.
2. Instalar dependências: `npm install`.
3. Configurar variáveis ​​de ambiente: Copie `.env.example` para `.env` e ajuste as variáveis conforme necessário.
4. Executar aplicação: `npm run dev`.
