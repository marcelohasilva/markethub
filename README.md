# 🛒 MarketHub --- Front‑end

> Aplicação de **Marketplace Multi‑Vendedor** desenvolvida com foco em
> **arquitetura escalável, boas práticas de Front‑end e organização de
> código**.

O **MarketHub** é um projeto acadêmico e de portfólio que simula um
marketplace completo, permitindo cadastro de usuários, cadastro de
produtos, visualização de lojas, favoritos e carrinho de compras.

O objetivo do projeto é demonstrar domínio de tecnologias modernas do
ecossistema **JavaScript/TypeScript**, organização de código em
aplicações front‑end e integração com APIs REST.

------------------------------------------------------------------------

# 🚀 Stack Tecnológica

O projeto foi desenvolvido utilizando tecnologias modernas do
ecossistema front‑end.

  Tecnologia                      Descrição
  ------------------------------- --------------------------------------------
  **React 18**                    Biblioteca para construção de interfaces
  **TypeScript**                  Tipagem estática para maior segurança
  **Next.js**                     Framework React para aplicações escaláveis
  **Tailwind CSS v4**             Estilização moderna e responsiva
  **React Router / App Router**   Gerenciamento de rotas
  **Fetch API**                   Comunicação com backend
  **LocalStorage API**            Persistência de favoritos

------------------------------------------------------------------------

# 🎯 Objetivos do Projeto

Este projeto foi desenvolvido para:

-   Aplicar boas práticas de **arquitetura Front‑end**
-   Trabalhar com **TypeScript em aplicações reais**
-   Integrar **Front‑end com API REST**
-   Organizar aplicações React em **componentes reutilizáveis**
-   Preparar estrutura para **projetos escaláveis**

------------------------------------------------------------------------

# 📦 Requisitos

Antes de executar o projeto, certifique-se de possuir:

-   **Node.js 18+**
-   **npm 9+**
-   **Git** (opcional)

Verificar versões:

``` bash
node -v
npm -v
```

------------------------------------------------------------------------

# ▶️ Como executar o projeto

Clone o repositório:

``` bash
git clone https://github.com/marcelohasilva/markethub.git
```

Acesse a pasta do projeto:

``` bash
cd markethub
```

Instale as dependências:

``` bash
npm install
```

Execute o projeto em modo desenvolvimento:

``` bash
npm run dev
```

A aplicação estará disponível em:

    http://localhost:3000

------------------------------------------------------------------------

# 🧰 Scripts Disponíveis

  Script            Função
  ----------------- -------------------------------------
  `npm run dev`     Executa servidor de desenvolvimento
  `npm run build`   Gera build de produção
  `npm run start`   Executa aplicação em produção
  `npm run lint`    Analisa padrões de código

------------------------------------------------------------------------

# 📁 Estrutura do Projeto

Estrutura atual da aplicação:

    src/
     ├── components/      # Componentes reutilizáveis
     ├── pages/           # Páginas da aplicação
     ├── functions/       # Helpers e utilidades
     ├── services/        # Comunicação com API
     ├── styles/          # Estilos globais
     └── routes.tsx       # Definição de rotas

Descrição das pastas:

  Pasta          Responsabilidade
  -------------- ----------------------------------------
  `components`   Componentes reutilizáveis da interface
  `pages`        Páginas principais da aplicação
  `functions`    Funções utilitárias
  `services`     Chamadas para API
  `styles`       Estilos globais

------------------------------------------------------------------------

# 🧭 Rotas Principais

  Rota                  Descrição
  --------------------- -----------------------
  `/`                   Página inicial
  `/login`              Login de usuário
  `/cadastro`           Cadastro de usuário
  `/cadastrarloja`      Cadastro de loja
  `/cadastrarproduto`   Cadastro de produto
  `/loja`               Visualização de loja
  `/carrinho`           Carrinho de compras
  `/favoritos`          Lista de favoritos
  `/produto/:id`        Página de produto
  `/users`              Dashboard de usuários

------------------------------------------------------------------------

# 🔌 Integração com Backend

A aplicação consome uma **API REST** responsável por:

-   Cadastro de usuários
-   Cadastro de produtos
-   Listagem de produtos
-   Gerenciamento de lojas

URL base atual:

    http://localhost:8000

Melhoria planejada:

    .env
    NEXT_PUBLIC_API_URL=http://localhost:8000

------------------------------------------------------------------------

# ⭐ Sistema de Favoritos

Os produtos favoritos são armazenados utilizando **LocalStorage**.

Arquivo responsável:

    src/functions/Storage.ts

Chave utilizada:

    favorites

------------------------------------------------------------------------

# 🧾 Padrão de Commits

O projeto segue o padrão **Conventional Commits**.

  Tipo         Uso
  ------------ ----------------------------
  `feat`       Nova funcionalidade
  `fix`        Correção de bug
  `refactor`   Refatoração de código
  `style`      Alterações visuais
  `docs`       Alterações na documentação
  `chore`      Manutenção do projeto
  `test`       Testes

Exemplo:

``` bash
git commit -m "feat: adiciona cadastro de produtos"
```

------------------------------------------------------------------------

# 📈 Roadmap do Projeto

Melhorias planejadas:

-   [ ] Configuração de variáveis de ambiente
-   [ ] Centralização das requisições da API
-   [ ] Implementação de autenticação JWT
-   [ ] Gerenciamento global de estado
-   [ ] Testes automatizados
-   [ ] Deploy automatizado

------------------------------------------------------------------------

# 🐛 Problemas Comuns

### Erro de dependências

``` bash
rm -rf node_modules package-lock.json
npm install
```

### Porta já em uso

``` bash
npx kill-port 3000
```

------------------------------------------------------------------------

# 👥 Autores

Projeto desenvolvido por:

-   [Marcelo Henrique](https://github.com/marcelohasilva)
-   [Ricardo João](https://github.com/RicardoNsm)
-   [Gabriel Lopes](https://github.com/Gabriel-lopes06)
-   [Gabriel Ramos](https://github.com/gb-ramos01)
-   [Thiago Ruan](https://github.com/ThyagoRuan)