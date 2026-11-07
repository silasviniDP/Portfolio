# Portfólio — Silas Vinícius

Site pessoal desenvolvido para apresentar minha trajetória como estudante de
Análise e Desenvolvimento de Sistemas (ADS), minhas habilidades técnicas e os
projetos em que venho trabalhando ao longo da graduação.

🔗 **Deploy:** [https://silasvinidp-portfolio.vercel.app](https://silasvinidp-portfolio.vercel.app) <br/>
🔗 **LinkedIn:** [linkedin.com/in/silasvinidp](https://linkedin.com/in/silasvinidp) <br/>
🔗 **GitHub:** [github.com/silasviniDP](https://github.com/silasviniDP)

---

## Sobre o projeto

O objetivo deste portfólio é comunicar de forma direta e honesta o estágio
atual da minha formação: quais linguagens já pratico de forma ativa (Java e
SQL), quais tive contato em disciplinas da faculdade (C, HTML e CSS), e os
projetos reais desenvolvidos até aqui — sem inflar nada que ainda não domino.

A identidade visual segue uma linguagem inspirada em editores de código e
terminal, com tipografia monoespaçada para elementos de apoio (status, tags,
rótulos) combinada a uma fonte display para o conteúdo principal, tanto em
tema claro quanto escuro.

## Tecnologias

| Camada       | Tecnologia                          |
|--------------|--------------------------------------|
| Framework    | [Next.js 14](https://nextjs.org/) (App Router) |
| Biblioteca   | [React 18](https://react.dev/)       |
| Linguagem    | [TypeScript](https://www.typescriptlang.org/) |
| Estilização  | [Tailwind CSS](https://tailwindcss.com/) |
| Tipografia   | Space Grotesk · IBM Plex Mono (via `next/font`) |
| Deploy       | [Vercel](https://vercel.com/)        |

## Funcionalidades

- Layout responsivo, do mobile ao desktop
- Suporte automático a tema claro/escuro (`prefers-color-scheme`)
- Seções: apresentação, sobre, conhecimentos, projetos, formação e contato
- Projetos listados dinamicamente a partir de um array de dados
  (`components/Projects.tsx`), facilitando adicionar novos sem tocar no layout

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org/) instalado (versão 18 ou
superior).

```bash
# instalar dependências
npm install

# subir o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build de produção

```bash
npm run build
npm start
```

## Estrutura do projeto

├─ app/
│ ├─ layout.tsx # fontes, metadata e configuração global
│ ├─ page.tsx # composição das seções da página
│ └─ globals.css # tokens de cor (claro/escuro) + diretivas Tailwind
├─ components/
│ ├─ Hero.tsx # cabeçalho: nome, cargo e contatos
│ ├─ About.tsx # seção “sobre”
│ ├─ Skills.tsx # conhecimentos em uso vs. vistos na faculdade
│ ├─ Projects.tsx # projetos (dados do GitHub)
│ ├─ Education.tsx # formação acadêmica
│ ├─ Contact.tsx # canais de contato
│ └─ Footer.tsx
├─ tailwind.config.ts # paleta de cores e fontes customizadas
└─ public/ # (reservado para imagens estáticas, se houver)


## Personalização

| O que mudar            | Onde mudar                                                |
|-------------------------|-------------------------------------------------------------|
| Textos e links de contato | Diretamente em cada componente dentro de `components/`    |
| Cores do tema            | Variáveis em `app/globals.css`, dentro de `:root` (claro) e `@media (prefers-color-scheme: dark)` (escuro) |
| Novo projeto             | Adicionar um item ao array `projects` em `components/Projects.tsx` |

## Contato

- 📧 svestudos40@gmail.com
- 📱 (81) 98210-4083
- 📍 Recife, PE — Brasil
