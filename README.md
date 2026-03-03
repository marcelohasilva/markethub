# 🛒 MarketHub - Front-end

> Aplicação de marketplace multi-vendedor construída com React,
> TypeScript, Vite e Tailwind CSS v4.

O **MarketHub** é um projeto de marketplace focado em organização de
código, boas práticas de Front-end e evolução contínua para uma
arquitetura escalável.

------------------------------------------------------------------------

# 🚀 Stack Tecnológica

-   React 18+
-   TypeScript
-   Vite
-   Tailwind CSS v4
-   React Router
-   Fetch API

------------------------------------------------------------------------

# ✅ Requisitos

-   Node.js 18+
-   npm 9+
-   Git (opcional)

------------------------------------------------------------------------

# ▶️ Como rodar localmente

Na raiz do projeto:

``` bash
cd markethub-front-end
npm install
npm run dev
```

A aplicação estará disponível em:

http://localhost:5173

------------------------------------------------------------------------

# 🧰 Scripts disponíveis

``` bash
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção
npm run preview  # preview do build
npm run lint     # lint do projeto
```

------------------------------------------------------------------------

# 📁 Estrutura Atual do Projeto

  Pasta/Arquivo     Responsabilidade
  ----------------- ------------------------------------------------
  public/           Arquivos estáticos (imagens, favicon)
  src/components/   Componentes reutilizáveis
  src/pages/        Páginas da aplicação
  src/Functions/    Helpers locais (ex: favoritos em localStorage)
  src/routes.tsx    Definição das rotas
  src/index.css     Estilos globais + Tailwind v4

------------------------------------------------------------------------

# 🧭 Rotas Principais

-   `/` → Home\
-   `/cadastro` → Cadastro\
-   `/login` → Login\
-   `/cadastrarloja` → Rota protegida\
-   `/loja` → Loja\
-   `/carrinho` → Carrinho\
-   `/cadastrarproduto` → Cadastro de Produto\
-   `/favoritos` → Favoritos\
-   `/produto/:id` → Produto\
-   `/users` → Dashboard de Usuário

------------------------------------------------------------------------

# 🔌 Backend e API

Atualmente as chamadas utilizam `fetch` com URL base hardcoded:

http://localhost:8000

⚠️ Próxima melhoria planejada: - Migrar para variável de ambiente (.env)
usando `VITE_API_URL` - Centralizar chamadas em uma pasta `services/`

------------------------------------------------------------------------

# ⭐ Favoritos (localStorage)

Gerenciado pelo helper:

src/Functions/Storage.tsx

Chave utilizada:

favorites

------------------------------------------------------------------------

# 🧾 Padrão de Commits

O projeto segue o padrão **Conventional Commits**:

-   feat: nova funcionalidade
-   fix: correção de bug
-   refactor: refatoração
-   style: ajustes visuais
-   docs: documentação
-   chore: tarefas de manutenção
-   test: testes

Exemplo:

``` bash
git commit -m "feat: adiciona filtro de produtos"
```

------------------------------------------------------------------------

# 📈 Roadmap do Projeto

-   [ ] Migrar API para variável de ambiente
-   [ ] Centralizar requisições em services/
-   [ ] Implementar Context API ou Zustand
-   [ ] Adicionar autenticação JWT estruturada
-   [ ] Implementar testes com Vitest
-   [ ] Preparar para deploy (Vercel / Docker)

------------------------------------------------------------------------

# 🐛 Problemas Comuns

## Cannot find module

``` bash
rm -rf node_modules package-lock.json
npm install
```

## Port 5173 already in use

Feche o processo anterior do Vite ou reinicie o terminal.

------------------------------------------------------------------------

## 👨‍💻 Autor

Marcelo Henrique,
Ricardo João, 
Gabriel Lopez, 
Gabriel Ramos,
Thiago Ruan
