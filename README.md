# Portfólio — Silas Vinícius

Projeto em **Next.js 14 (App Router) + React + TypeScript + Tailwind CSS**.

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Build de produção

```bash
npm run build
npm start
```

## Estrutura

```
app/
  layout.tsx      # fontes (Space Grotesk + IBM Plex Mono), metadata
  page.tsx         # monta a página juntando os componentes
  globals.css      # tokens de cor (claro/escuro) + diretivas Tailwind
components/
  Hero.tsx         # status bar + cabeçalho com nome e contatos
  About.tsx
  Skills.tsx       # conhecimentos: "em uso" vs "visto na faculdade"
  Projects.tsx     # projetos puxados do GitHub
  Education.tsx
  Contact.tsx
  Footer.tsx
tailwind.config.ts # paleta e fontes customizadas
```

## Onde editar

- **Textos e links:** direto em cada componente dentro de `components/`.
- **Cores:** em `app/globals.css`, nas variáveis dentro de `:root` (modo
  claro) e dentro do bloco `@media (prefers-color-scheme: dark)` (modo
  escuro).
- **Novo projeto:** adicione um item ao array `projects` em
  `components/Projects.tsx`.
