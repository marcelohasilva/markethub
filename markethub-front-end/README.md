# 🛒 MarketHub - Frontend

> Plataforma de marketplace multi-vendedor construída com React, TypeScript e Vite

Bem-vindo(a) ao projeto! Esta é uma aplicação web moderna para conectar vendedores e compradores. O objetivo é que você aprenda os fundamentos de React, TypeScript e Tailwind CSS.

## 🚀 Características & Requisitos

### Requisitos Mínimos

- **Node.js** 18.x ou superior
- **npm** 9.x ou superior
- **Git** para controle de versão
- **Visual Studio Code** (recomendado)

## 🔧 Guia de Instalação (Passo a Passo)

Siga estes passos para deixar a aplicação rodando na sua máquina local:

### 1. Clonar o Repositório

Abra seu terminal e clone este projeto:

```bash
git clone https://github.com/marcelohasilva/markethub-frontend.git
cd markethub-frontend
```

### 2. Instalar Dependências (O Papel do npm)

Este projeto usa o **npm** para gerenciar dependências. Ele é o responsável por instalar as bibliotecas necessárias.

Rode o seguinte comando:

```bash
npm install
```

**O que o npm faz?** Ele lê o arquivo `package.json` e:
- Baixa os pacotes (React, Vite, Tailwind CSS, etc.)
- Cria a pasta `node_modules/` onde ficam as dependências
- Cria o arquivo `package-lock.json` que "trava" as versões

### 3. Configurar Variáveis de Ambiente (.env)

Para conectar ao backend, precisamos da URL da API. Ela está no arquivo `.env`, que NÃO deve ser enviado para o repositório.

**Copie o exemplo:** Duplique o arquivo `.env.example` e renomeie a cópia para `.env`.

**Edite o arquivo `.env`:** Preencha com a URL do seu backend:

```env
# Variáveis de Ambiente
VITE_API_URL=http://localhost:3000/api

VITE_APP_NAME=MarketHub
VITE_APP_ENV=development
```

### 4. Iniciar o Servidor de Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

**Pronto! 🎉** Agora você já pode começar a desenvolver.

## ⚙️ Estrutura e Fluxo da Aplicação

A aplicação segue uma arquitetura baseada em componentes React.

| Pasta | Conteúdo | Responsabilidade |
|-------|----------|------------------|
| `public/` | Arquivos estáticos | Imagens, favicon, etc. |
| `src/components/` | Componentes React | Botões, Cards, Header, Footer |
| `src/pages/` | Páginas da aplicação | Home, Produtos, Carrinho, Perfil |
| `src/services/` | Comunicação com API | Fetch para o backend |
| `src/types/` | Interfaces TypeScript | Tipagem de dados (Product, User) |
| `src/hooks/` | Custom Hooks | Lógica reutilizável |

## 🧩 Como Adicionar Novas Funcionalidades

Para adicionar um novo recurso (ex: **Carrinho de Compras**), você precisa seguir os pilares da arquitetura: Tipos, Serviço, Componente.

### Passo 1: Criar os Tipos (src/types/cart.ts)

Os tipos definem a estrutura dos dados que vamos trabalhar.

```typescript
// src/types/cart.ts
export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
}
```

### Passo 2: Criar o Serviço (src/services/cartService.ts)

O serviço é responsável por comunicar com o backend usando Fetch.

```typescript
// src/services/cartService.ts
const API_URL = import.meta.env.VITE_API_URL;

export const getCart = async (): Promise<Cart> => {
  const response = await fetch(`${API_URL}/cart`);
  
  if (!response.ok) {
    throw new Error('Erro ao buscar carrinho');
  }
  
  return await response.json();
};

export const addToCart = async (productId: string, quantity: number) => {
  const response = await fetch(`${API_URL}/cart`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ productId, quantity })
  });
  
  if (!response.ok) {
    throw new Error('Erro ao adicionar ao carrinho');
  }
  
  return await response.json();
};
```

### Passo 3: Criar o Componente (src/components/CartItem.tsx)

O componente exibe os dados e permite interação do usuário.

```tsx
// src/components/CartItem.tsx
import { FC } from 'react';
import { CartItem as CartItemType } from '../types/cart';

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: string) => void;
}

export const CartItem: FC<CartItemProps> = ({ item, onRemove }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">
      <img 
        src={item.imageUrl} 
        alt={item.name}
        className="w-20 h-20 object-cover rounded"
      />
      
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-600">
          Quantidade: {item.quantity}
        </p>
      </div>
      
      <div className="text-right">
        <p className="text-lg font-bold text-blue-600">
          {formatPrice(item.price * item.quantity)}
        </p>
        <button
          onClick={() => onRemove(item.id)}
          className="text-sm text-red-600 hover:underline"
        >
          Remover
        </button>
      </div>
    </div>
  );
};
```

### Passo 4: Criar a Página (src/pages/Cart.tsx)

A página junta tudo e exibe a interface completa.

```tsx
// src/pages/Cart.tsx
import { FC, useState, useEffect } from 'react';
import { CartItem } from '../components/CartItem';
import { Cart as CartType } from '../types/cart';
import { getCart } from '../services/cartService';

export const Cart: FC = () => {
  const [cart, setCart] = useState<CartType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const data = await getCart();
      setCart(data);
    } catch (error) {
      console.error('Erro ao carregar carrinho:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = (id: string) => {
    console.log('Remover item:', id);
    // Implementar lógica de remoção
  };

  if (loading) {
    return <div className="text-center py-8">Carregando...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Meu Carrinho</h1>
      
      <div className="space-y-4">
        {cart?.items.map((item) => (
          <CartItem 
            key={item.id} 
            item={item} 
            onRemove={handleRemove}
          />
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <div className="flex justify-between text-xl font-bold">
          <span>Total:</span>
          <span className="text-blue-600">
            R$ {cart?.total.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};
```

## 📚 Git Básico - Comandos Essenciais

### Comandos do Dia a Dia

```bash
# Ver status dos arquivos
git status

# Adicionar arquivos para commit
git add .                           # Todos os arquivos
git add src/components/Button.tsx   # Arquivo específico

# Fazer commit
git commit -m "feat: adiciona botão de checkout"

# Ver histórico
git log --oneline

# Criar e mudar para nova branch
git checkout -b feature/minha-feature

# Enviar para o GitHub
git push origin feature/minha-feature

# Atualizar sua branch
git pull origin main
```

### Padrão de Commits

Seguimos o padrão **Conventional Commits**:

| Tipo | Uso | Exemplo |
|------|-----|---------|
| `feat:` | Nova funcionalidade | `feat: adiciona página de checkout` |
| `fix:` | Correção de bug | `fix: corrige cálculo do total` |
| `style:` | Mudanças visuais | `style: ajusta espaçamento do header` |
| `refactor:` | Refatoração de código | `refactor: simplifica lógica do carrinho` |
| `docs:` | Documentação | `docs: atualiza README` |
| `chore:` | Manutenção | `chore: atualiza dependências` |

**Exemplos de commits bons ✅**

```bash
git commit -m "feat: adiciona filtro de produtos"
git commit -m "fix: corrige erro ao adicionar item"
git commit -m "style: melhora responsividade mobile"
```

**Exemplos de commits ruins ❌**

```bash
git commit -m "mudanças"
git commit -m "fix"
git commit -m "atualizações"
```

## 🤝 Como Contribuir para o Repositório

Siga este fluxo simples para garantir que suas alterações sejam revisadas e integradas corretamente:

### 1. Crie uma Branch

Nunca trabalhe diretamente na branch principal (`main`). Crie uma branch específica para a sua tarefa.

```bash
# Certifique-se de estar na main atualizada
git checkout main
git pull origin main

# Crie sua branch
git checkout -b feature/nome-da-feature
```

**Exemplos de nomes:**
- `feature/add-cart`
- `feature/product-filter`
- `fix/header-mobile`

### 2. Faça suas Alterações

Desenvolva o código (Tipos, Serviços, Componentes) e teste localmente com `npm run dev`.

### 3. Commit e Push

Quando a funcionalidade estiver completa e testada, registre suas alterações:

```bash
# Adiciona os arquivos modificados
git add .

# Cria o commit com mensagem clara
git commit -m "feat: implementa carrinho de compras"

# Envia para o repositório remoto
git push origin feature/nome-da-feature
```

### 4. Crie um Pull Request (PR)

1. Acesse o repositório no GitHub
2. Clique em **"Pull Requests"**
3. Clique em **"New Pull Request"**
4. Selecione sua branch
5. Preencha a descrição:

```markdown
## Descrição
Implementa funcionalidade de carrinho de compras.

## Tipo de Mudança
- [x] Nova feature
- [ ] Bug fix
- [ ] Documentação

## Checklist
- [x] Código testado localmente
- [x] Segue padrão de commits
```

6. Aguarde a revisão de um mantenedor

## 🐛 Problemas Comuns

### "Cannot find module"

```bash
# Solução: Reinstale as dependências
rm -rf node_modules package-lock.json
npm install
```

### "Port 5173 already in use"

```bash
# Mate o processo ou reinicie o terminal
# Linux/Mac: lsof -ti:5173 | xargs kill -9
```

### Tailwind não funciona

```bash
# Verifique se está no src/index.css:
# @tailwind base;
# @tailwind components;
# @tailwind utilities;

# Reinicie o servidor
npm run dev
```

## 📚 Recursos de Aprendizado

- [React Docs](https://react.dev/learn) - Tutorial oficial
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Guia TypeScript
- [Tailwind CSS](https://tailwindcss.com/docs) - Documentação completa

---
