# AGENTS.md — Leia antes de qualquer alteração

> **Obrigatório para humanos e IAs:** leia **`docs/SITE-CONTEXT.md`** por completo antes de editar código, copy, SEO, blog, i18n ou assets neste repositório.  
> Ignorar este documento causa regressões de indexação, posicionamento de marca e conteúdo multilíngue.

---

## Ordem de leitura

1. **Este arquivo** (`AGENTS.md`) — regras críticas e erros comuns  
2. **`docs/SITE-CONTEXT.md`** — contexto completo (SEO, blog, copy, arquivos, histórico)  
3. Só então implemente a tarefa pedida

---

## Erros que a IA **não** deve cometer

### SEO e indexação
- **Nunca** quebrar rotas `app/[locale]/…` ou remover hreflang/canonical de `lib/metadata.ts`
- **Nunca** bloquear crawlers em `app/robots.ts` (inclui bots de IA já configurados)
- Canonical de produção: **`https://www.3035tech.com`** (apex redireciona via `next.config.mjs`)
- Sitemap correto: **`https://www.3035tech.com/sitemap.xml`**
- Ao alterar FAQ: atualizar **`FAQ_COUNT`** em **`components/faq.tsx`** e **`lib/seo-data.ts`**, e chaves `faq.N.*` nos **4 idiomas**
- Novo post de blog → conteúdo em **en, es, pt, de**; entra no sitemap, RSS e llms.txt automaticamente se seguir `lib/blog-data.ts`

### Posicionamento de marca
- 3035TECH = **parceiro de engenharia**, não “AI dev shop”
- Copy de IA **só** em `about.delivery.*` e `faq.11.*` — tom conservador; **“oferecemos”**, não **“vendemos”**
- Startups / mercado europeu → **`about.europe.*`**, **não** misturar no FAQ de IA
- Eventos (feiras, conferências) → **LinkedIn**, não blog (salvo insight evergreen)

### Blog
- Linha editorial: **evergreen**, comprador enterprise — não recaps de eventos
- 10 posts atuais; estrutura em `lib/blog-data.ts` + `lib/blog-posts-additional.ts`
- Ordenação por `publishedAt` (desc)

### Assets e UI
- Todo serviço em `lib/pages-data.ts` **precisa** de imagem em `public/images/`
- Logo SAP (`teach.tsx`): **`invertOnDark: false`** — filtro invert deixa bloco cinza
- Logo Dell: **`invertOnDark: true`**

### Workflow
- **Não commitar** salvo pedido explícito do usuário
- Escopo mínimo — não refatorar fora do pedido
- Após mudanças: `npm run build`
- Após deploy: `npm run verify:seo`

---

## Idiomas

| Uso | Locales |
|-----|---------|
| UI do site | `en`, `es`, `pt`, `de` — **sempre os 4** para textos visíveis |
| Suporte humano | English e Portuguese apenas |

---

## Arquivos que a IA deve consultar por tipo de tarefa

| Tarefa | Arquivos |
|--------|----------|
| Textos / copy | `lib/i18n/translations.ts` |
| Blog | `lib/blog-posts-additional.ts`, `lib/blog-data.ts`, `lib/blog-types.ts` |
| FAQ + schema | `components/faq.tsx`, `lib/seo-data.ts`, `translations.ts` |
| Serviços / cases | `lib/pages-data.ts`, `public/images/` |
| SEO global | `app/sitemap.ts`, `app/robots.ts`, `lib/metadata.ts`, `lib/llms-content.ts` |
| About / IA / Europa | `components/about.tsx`, `translations.ts` |
| 3035TEACH logos | `components/teach.tsx`, `lib/images.ts` |

---

## Documentação completa

Tudo o que foi decidido em sessões anteriores (indexação, blog, posicionamento IA, Irlanda, assets, commits) está em:

**→ [`docs/SITE-CONTEXT.md`](./docs/SITE-CONTEXT.md)**

Atualize esse arquivo quando novas decisões forem aprovadas.
