# E-commerce

Este projeto foi desenvolvido para simular uma loja virtual com páginas e componentes essenciais de um e-commerce moderno.  
Você pode visualizar o projeto em funcionamento através do link abaixo:

👉 **[Acessar o site](https://b8one-eight.vercel.app/)**

## Funcionalidades

- **Home** — exibe banners, categorias e produtos em destaque.
- **Página do Produto** — mostra detalhes do item, preço e botão de compra.
- **Página de Ofertas** — lista produtos com desconto e opções de filtragem/ordenação.
- **Wishlist** — permite favoritar produtos e visualizá-los depois.
- **Mini-cart** — exibe um resumo de compras sem sair da página.

## Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** — framework React com renderização híbrida (SSR/SSG).
- **TypeScript** — tipagem estática para código mais seguro e legível.
- **[Tailwind CSS](https://tailwindcss.com/)** — estilização com utilitários e alta produtividade.
- **[shadcn/ui](https://ui.shadcn.com/)** — componentes acessíveis e personalizáveis.
- **[Zustand](https://zustand-demo.pmnd.rs/)** — gerenciamento de estado simples e escalável.
- **[ESLint](https://eslint.org/)** — análise estática para manter o código limpo e padronizado.
- **[Prettier](https://prettier.io/)** — formatação automática de código consistente.

## CI/CD (Jobs configurados)

O projeto conta com dois jobs principais em sua pipeline:

- **Linter** — executa o ESLint para garantir a padronização e qualidade do código.
- **Build** — realiza o build de produção, validando se o projeto está pronto para implantação.
