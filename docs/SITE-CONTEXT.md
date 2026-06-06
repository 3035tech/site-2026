# 3035TECH Site — Contexto do Projeto

> **Para IAs e desenvolvedores:** leia **`AGENTS.md`** (raiz) primeiro, depois este arquivo por completo, **antes** de qualquer alteração.

Documento de referência para alterações futuras no site.

Última atualização: **2026-06-06**

---

## Visão geral

| Item | Valor |
|------|--------|
| Projeto | Site institucional / marketing 3035TECH |
| Stack | Next.js 16 (App Router), React 19, Tailwind |
| Repositório | `3035tech/site-2026` |
| Produção | `https://www.3035tech.com` |
| Idiomas do site | `en`, `es`, `pt`, `de` (4 locales) |
| Idiomas de suporte humano | **English** e **Portuguese** apenas |
| Blog no nav/footer | Label **"Insights"** |

---

## Posicionamento de marca (decisões aprovadas)

### Tom geral
- Parceiro de **engenharia tradicional**, não “AI dev shop”.
- Tom **conservador** em IA: usar **“oferecemos”**, nunca **“vendemos”** IA.
- Startups, scale-ups e mercado europeu → bloco **About / Europa**, **não** dentro do FAQ de IA.

### Blocos de copy importantes

| Chave i18n | Onde aparece | Regra |
|------------|--------------|-------|
| `about.delivery.*` | `components/about.tsx` | Só sobre IA, tom conservador |
| `about.desc1` | About | Startups/scale-ups até organizações estabelecidas |
| `about.europe.*` | About (bloco Irlanda) | Hub europeu (Dublin): startups, negócios em crescimento, contas maiores na UE/UK — **não é bloco de notícias** |
| `faq.11.*` | FAQ | Resposta **só sobre IA**; termina com: não oferecem IA como produto separado; oferecem times de engenharia |

### Eventos (Hannover Messe, DTS, etc.)
- **Redes sociais (LinkedIn)** = canal certo para presença em feiras.
- **Blog** = só se virar insight evergreen (1 artigo, não recap de stand).
- **Não** colocar menções datadas em About/home.

---

## SEO e indexação

### Infraestrutura existente
- Rotas localizadas em `app/[locale]/…`
- `<html lang>` via layout de locale
- **Canonical** sempre em `www.3035tech.com`
- Redirect permanente `3035tech.com` → `www.3035tech.com` em `next.config.mjs`
- Verificação Bing: `public/BingSiteAuth.xml`

### URLs críticas de produção
| Recurso | URL correta |
|---------|-------------|
| Sitemap | `https://www.3035tech.com/sitemap.xml` |
| Robots | `https://www.3035tech.com/robots.txt` |
| RSS | `https://www.3035tech.com/feed.xml` |
| LLMs | `https://www.3035tech.com/llms.txt` |
| OG dinâmico | `https://www.3035tech.com/og?title=…&description=…` |

> **Atenção Bing:** registrar o site como `https://www.3035tech.com`, **não** como URL do sitemap.

### O que cada página/recurso faz
| Arquivo | Função |
|---------|--------|
| `app/sitemap.ts` | Sitemap com `lastModified`, prioridade e **hreflang** (`buildAlternateLanguages`) |
| `app/robots.ts` | Permite crawlers gerais + bots de IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.) |
| `app/feed.xml/route.ts` | RSS dos posts (EN) |
| `app/llms.txt/route.ts` | Conteúdo dinâmico para crawlers de IA (`lib/llms-content.ts`) |
| `lib/metadata.ts` | Canonical, hreflang, OG/Twitter; `createArticleMetadata` para blog |
| `components/structured-data.tsx` | JSON-LD: Organization, FAQ, Blog ItemList, case studies, etc. |
| `lib/seo-data.ts` | FAQ schema (`FAQ_COUNT`), conteúdo estático para LLMs legado |

### FAQ schema
- **`FAQ_COUNT = 11`** em `components/faq.tsx` **e** `lib/seo-data.ts`
- Ao adicionar/remover FAQ, atualizar **ambos** + chaves `faq.N.q` / `faq.N.a` nos **4 idiomas** em `lib/i18n/translations.ts`

### Blog — indexação
Cada post gera **4 URLs estáticas** (SSG via `generateStaticParams`):
- Meta: title, description, canonical, hreflang
- JSON-LD `BlogPosting` na página do artigo
- Entrada no sitemap com `lastModified = publishedAt`
- Listagem no RSS (`feed.xml`, EN)
- Listagem no `llms.txt` (todos os idiomas)
- ItemList na home (`structured-data.tsx`)

### Verificação pós-deploy
```bash
npm run verify:seo
# ou contra outro host:
SITE_URL=https://www.3035tech.com npm run verify:seo
```
Script: `scripts/verify-seo.mjs` — CI em `.github/workflows/ci.yml`.

### Checklist ao adicionar conteúdo indexável
- [ ] Traduções nos **4 locales** (`lib/i18n/translations.ts` ou `lib/blog-posts-additional.ts`)
- [ ] Slug único; post aparece em `blogSlugs` automaticamente via array
- [ ] `publishedAt` coerente (blog ordenado por data desc)
- [ ] `npm run build` passa
- [ ] Após deploy: `npm run verify:seo`
- [ ] Reenviar sitemap no Google Search Console / Bing se necessário

---

## Blog (Insights)

### Estado atual (2026-06-06)
- **10 posts** com datas desde **2026-01-10** até **2026-05-08**
- Linha editorial: **evergreen**, orientado a comprador enterprise (nearshore, squads, React, Java, cloud, QA, Europa)
- **Não** usar blog para recaps de eventos

### Estrutura de arquivos
| Arquivo | Conteúdo |
|---------|----------|
| `lib/blog-types.ts` | Tipos `BlogPost`, `BlogSection`, etc. |
| `lib/blog-data.ts` | Posts originais + merge com adicionais; exporta helpers |
| `lib/blog-posts-additional.ts` | Posts extras (7 adicionados em jun/2026) |
| `app/[locale]/blog/page.tsx` | Índice |
| `app/[locale]/blog/[slug]/page.tsx` | Artigo + schema |

### Posts (slug → data)
1. `long-term-engineering-partnerships` — 2026-01-10  
2. `java-spring-boot-enterprise-backends` — 2026-01-24  
3. `react-native-enterprise-mobile-apps` — 2026-02-07  
4. `onboarding-nearshore-engineers-in-30-days` — 2026-02-21  
5. `cloud-native-delivery-aws-kubernetes` — 2026-03-07  
6. `nearshore-staff-augmentation-from-brazil` — 2026-03-15  
7. `quality-engineering-in-distributed-squads` — 2026-03-28  
8. `managed-squads-vs-staff-augmentation` — 2026-04-02  
9. `enterprise-react-development-at-scale` — 2026-04-20  
10. `european-software-delivery-from-ireland` — 2026-05-08  

### Como adicionar um post
1. Adicionar objeto `BlogPost` em `lib/blog-posts-additional.ts` (ou `coreBlogPosts` em `blog-data.ts`)
2. Conteúdo completo em `en`, `es`, `pt`, `de` (title, description, tag, sections)
3. `slug` kebab-case, `publishedAt` ISO date, `readingTimeMinutes`
4. Rodar build

---

## Serviços e imagens

### Serviços (`lib/pages-data.ts`)
| Slug | Imagem |
|------|--------|
| `managed-squads` | `/images/managed-squads.jpg` |
| `staff-augmentation` | `/images/staff-augmentation.jpg` |
| `custom-development` | `/images/custom-development.jpg` |
| `support-evolution` | `/images/support-evolution.jpg` |

Todas as páginas de serviço **devem** ter imagem 16:9 na listagem (`app/[locale]/services/page.tsx`) e na página individual.

Inventário de paths: `lib/images.ts` → `allSiteImagePaths` (usado por `npm run validate:images`).

---

## 3035TEACH — logos alumni

| Logo | Arquivo | `invertOnDark` | Motivo |
|------|---------|----------------|--------|
| SAP | `/images/logos/sap.svg` | **`false`** | Logo com fundo azul de marca; filtro `brightness-0 invert` vira bloco cinza |
| Dell | `/images/logos/dell.svg` | **`true`** | Monocromático no fundo escuro |

Componente: `components/teach.tsx` — respeitar `invertOnDark` de `lib/images.ts` (`teachAlumniLogos`).

---

## Mapa de arquivos principais

```
app/
  [locale]/          # Rotas localizadas (home, about, blog, services, …)
  sitemap.ts
  robots.ts
  feed.xml/route.ts
  llms.txt/route.ts
  og/route.tsx
components/
  about.tsx          # Blocos delivery + europe
  faq.tsx            # FAQ_COUNT
  teach.tsx          # Alumni logos
  structured-data.tsx
lib/
  i18n/translations.ts
  blog-data.ts
  blog-posts-additional.ts
  blog-types.ts
  pages-data.ts      # Serviços + case studies
  seo-data.ts        # FAQ schema, FAQ_COUNT
  llms-content.ts
  metadata.ts
  site.ts            # siteUrl
public/
  BingSiteAuth.xml
  images/            # Fotos de serviços, cases, logos
scripts/
  verify-seo.mjs
  validate-images.mjs
```

---

## Preferências do time

- **Não commitar** salvo pedido explícito
- **Escopo mínimo** — não refatorar o que não foi pedido
- Seguir convenções existentes (naming, estrutura i18n, padrão de componentes)
- Copy em **4 idiomas** para UI; suporte humano só EN/PT
- Testes: `npm run build`; SEO em prod: `npm run verify:seo`

---

## Histórico recente (git)

| Commit | Resumo |
|--------|--------|
| `fa2d0fa` | Fix logo SAP no 3035TEACH (`invertOnDark`) |
| `53c1319` | 10 posts no blog + refactor `blog-posts-additional` |
| `3377c7f` | FAQ #11 (IA) + bloco `about.delivery` |
| `d5a1cdb` | Redirect apex → www |
| `137b007` | Bloco Europa (Irlanda) no About |
| `c97eecc` | CI + script `verify:seo` |
| `a6c8cdb` | Locale routes, SEO infrastructure, UX |

---

## Referência de conversa

Contexto detalhado das sessões de jun/2026 (posicionamento IA, blog, SEO, assets): transcript do agente em `.cursor/projects/.../agent-transcripts/` — buscar por `636e30de-0687-484b-8daf-1786d3e5b099`.

---

*Mantenha este arquivo atualizado quando decisões de produto, SEO ou copy forem aprovadas.*
