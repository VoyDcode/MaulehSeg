# MaulehSeg

Site institucional da MaulehSeg, feito com React 19, TypeScript, Vite e React Router (framework mode com pré-renderização estática).

## Requisitos

- Node.js 22.22 ou superior

## Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Gera os tipos das rotas, checa o TypeScript e gera o build em `build/client` |
| `npm run typecheck` | Só a checagem de tipos |
| `npm run lint` | Oxlint (inclui regras de acessibilidade) |

## Estrutura

```
src/
├── root.tsx        documento HTML, metadados globais e layout
├── routes.ts       mapa de rotas
├── routes/         uma página por arquivo
├── components/
│   ├── layout/     header, navegação, footer e layout do site
│   └── ui/         componentes visuais reutilizáveis
├── content/        textos e dados do site (separados da apresentação)
├── types/          tipos do conteúdo
├── styles/         tokens do design system e estilos globais
└── assets/         fontes e imagens
```

## Conteúdo provisório

Os dados ainda não oficiais ficam em `src/content/` e estão marcados com `PROVISÓRIO`.

## Hospedagem

O build é estático (`ssr: false`): cada rota vira `build/client/<rota>/index.html`. Rotas não pré-renderizadas, como a página 404, precisam que o servidor devolva `build/client/__spa-fallback.html`.

O `vite preview` não serve essa estrutura corretamente (em `/quem-somos` ele entrega o HTML da Home). Para revisar o site, use `npm run dev`.
