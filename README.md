# 3035TECH — Site institucional

Site de marketing da [3035TECH](https://www.3035tech.com): parceira global de engenharia com sede no Brasil, operações nos EUA, Irlanda e Alemanha.

**Produção:** https://www.3035tech.com  
**Repositório:** `3035tech/site-2026`

---

## Stack

| Tecnologia | Versão |
|------------|--------|
| Next.js (App Router) | 16 |
| React | 19 |
| TypeScript | 5.7 |
| Tailwind CSS | 4 |
| Deploy | Vercel |

---

## Começando

### Pré-requisitos

- Node.js 22+
- npm

### Instalação e desenvolvimento

```bash
npm ci
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). O middleware redireciona para um locale (ex.: `/en`, `/pt`).

### Build de produção

```bash
npm run build
npm run start
```

---

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build estático/SSG |
| `npm run start` | Servidor de produção (após build) |
| `npm run lint` | ESLint |
| `npm run validate:images` | Valida referências a arquivos em `public/images/` |
| `npm run verify:seo` | Verifica endpoints SEO em produção (usa `SITE_URL`, padrão `https://www.3035tech.com`) |

Exemplo de verificação SEO contra outro host:

```bash
SITE_URL=https://www.3035tech.com npm run verify:seo
```

---

## Estrutura do projeto

```
app/
  [locale]/           # Rotas localizadas (home, about, services, blog, case-studies, …)
  sitemap.ts          # Sitemap com hreflang
  robots.ts           # Crawlers + bots de IA
  feed.xml/           # RSS do blog (EN)
  llms.txt/           # Conteúdo para crawlers de IA
  og/                 # Open Graph dinâmico
components/           # UI (navbar, about, faq, services, …)
lib/
  i18n/               # Locales e traduções (en, es, pt, de)
  blog-data.ts        # Posts do blog (Insights)
  pages-data.ts       # Serviços e case studies
  metadata.ts         # Canonical, hreflang, OG
  client-links.ts     # URLs de clientes (links no blog)
public/
  images/             # Fotos, logos, assets de serviços
docs/
  SITE-CONTEXT.md     # Contexto completo (SEO, copy, decisões de produto)
AGENTS.md             # Regras para IAs e devs antes de alterar o repo
```

---

## Internacionalização

| Locale | Rota | Uso |
|--------|------|-----|
| `en` | `/en/...` | Inglês |
| `es` | `/es/...` | Espanhol |
| `pt` | `/pt/...` | Português |
| `de` | `/de/...` | Alemão |

Textos da UI ficam em `lib/i18n/translations.ts`. **Todo conteúdo visível novo deve existir nos quatro idiomas.**

Suporte humano (contato): English e Portuguese apenas.

---

## Conteúdo principal

| Área | Onde editar |
|------|-------------|
| Copy geral / FAQ | `lib/i18n/translations.ts` |
| Blog (Insights) | `lib/blog-data.ts`, `lib/blog-posts-additional.ts` |
| Serviços | `lib/pages-data.ts` + imagens em `public/images/` |
| Case studies | `lib/pages-data.ts` |
| Logos de clientes | `lib/images.ts` |
| Links de clientes no blog | `lib/client-links.ts` |

---

## SEO

- Canonical: `https://www.3035tech.com` (apex `3035tech.com` redireciona via `next.config.mjs`)
- Sitemap: `/sitemap.xml` com alternates hreflang
- JSON-LD: Organization, FAQ (11 itens), blog, case studies
- Verificação Bing: `public/BingSiteAuth.xml`

Variáveis opcionais (`.env.example`):

```env
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
NEXT_PUBLIC_BING_SITE_VERIFICATION=
```

---

## CI

GitHub Actions (`.github/workflows/ci.yml`) em push/PR para `main`:

1. `npm ci`
2. `npm run build`
3. `npm run validate:images`

---

## Documentação para contribuidores

Antes de alterar copy, SEO, blog ou i18n, leia:

1. **[AGENTS.md](./AGENTS.md)** — regras críticas e erros comuns  
2. **[docs/SITE-CONTEXT.md](./docs/SITE-CONTEXT.md)** — contexto completo do projeto  

Regra Cursor em `.cursor/rules/site-context.mdc` aplica essas orientações automaticamente no editor.

---

## Licença

Projeto privado — © 3035TECH. Todos os direitos reservados.
