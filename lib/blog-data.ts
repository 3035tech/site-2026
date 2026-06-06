import { type Locale, locales, localizedPath } from '@/lib/i18n/config'
import { siteUrl } from '@/lib/site'
import { additionalBlogPosts } from '@/lib/blog-posts-additional'

export type { BlogPost, BlogPostContent, BlogSection } from '@/lib/blog-types'

const coreBlogPosts = [
  {
    slug: 'nearshore-staff-augmentation-from-brazil',
    publishedAt: '2026-03-15',
    readingTimeMinutes: 6,
    content: {
      en: {
        title: 'Nearshore Staff Augmentation from Brazil: A Practical Guide',
        description:
          'Why global enterprises choose Brazil and LATAM for nearshore engineering teams — time zones, talent depth, and enterprise delivery experience.',
        tag: 'Nearshore',
        sections: [
          {
            paragraphs: [
              'Nearshore staff augmentation lets enterprises expand engineering capacity without the overhead of building a new office abroad. Brazil has become one of the most attractive nearshore destinations for North American and European companies — not because of cost alone, but because of timezone alignment, English proficiency, and a mature enterprise software ecosystem.',
              '3035TECH has delivered nearshore teams to clients including ClickFunnels (USA), LunchTeam (Ireland), and GoMoney (global) for over a decade. Engineers work in overlapping hours with US East Coast and European business hours, participate in daily standups, and integrate directly into client tooling — GitHub, Jira, Slack, and internal CI/CD pipelines.',
            ],
          },
          {
            heading: 'When nearshore augmentation makes sense',
            paragraphs: [
              'Staff augmentation works best when you have a clear product roadmap, established engineering processes, and need to accelerate delivery without hiring locally. Typical use cases include scaling a React frontend squad, adding backend capacity for API integrations, or filling specialized roles like mobile or cloud architecture.',
              'Unlike offshore outsourcing with handoff-based delivery, nearshore augmentation keeps engineers embedded in your team. They attend your ceremonies, follow your code standards, and build institutional knowledge alongside your internal developers.',
            ],
          },
          {
            heading: 'What to look for in a nearshore partner',
            paragraphs: [
              'Enterprise clients should evaluate timezone overlap, English communication standards, retention rates, and experience with similar tech stacks. 3035TECH engineers specialize in React, Java/Spring Boot, React Native, and cloud-native architectures — the same stacks used by our clients in retail, fintech, healthcare, and SaaS.',
              'If you are evaluating nearshore options from Brazil, start with a small embedded team and scale based on delivery outcomes. Most of our long-term partnerships began with two to four engineers and grew into managed squads with full delivery ownership.',
            ],
          },
        ],
      },
      es: {
        title: 'Staff Augmentation Nearshore desde Brasil: Guía Práctica',
        description:
          'Por qué las empresas globales eligen Brasil y LATAM para equipos de ingeniería nearshore — husos horarios, talento y experiencia enterprise.',
        tag: 'Nearshore',
        sections: [
          {
            paragraphs: [
              'El staff augmentation nearshore permite a las empresas ampliar su capacidad de ingeniería sin la complejidad de abrir una oficina en el extranjero. Brasil se ha convertido en uno de los destinos nearshore más atractivos para compañías de Norteamérica y Europa — no solo por costo, sino por alineación de husos horarios, dominio del inglés y un ecosistema maduro de software empresarial.',
              '3035TECH ha entregado equipos nearshore a clientes como ClickFunnels (EE.UU.), LunchTeam (Irlanda) y GoMoney (global) durante más de una década. Los ingenieros trabajan en horarios compatibles con la costa este de EE.UU. y Europa, participan en daily standups e integran directamente las herramientas del cliente.',
            ],
          },
          {
            heading: 'Cuándo tiene sentido el augmentation nearshore',
            paragraphs: [
              'El staff augmentation funciona mejor cuando tienes un roadmap claro, procesos de ingeniería establecidos y necesitas acelerar la entrega sin contratar localmente. Casos típicos: escalar un squad frontend en React, añadir capacidad backend para integraciones API o cubrir roles especializados.',
              'A diferencia del outsourcing offshore con entrega por handoff, el augmentation nearshore mantiene a los ingenieros embebidos en tu equipo, siguiendo tus estándares de código y construyendo conocimiento institucional junto a tus desarrolladores internos.',
            ],
          },
          {
            heading: 'Qué evaluar en un partner nearshore',
            paragraphs: [
              'Las empresas deben evaluar solapamiento de husos horarios, estándares de comunicación en inglés, retención de talento y experiencia con stacks similares. Los ingenieros de 3035TECH se especializan en React, Java/Spring Boot, React Native y arquitecturas cloud-native.',
              'Si evalúas opciones nearshore desde Brasil, comienza con un equipo pequeño embebido y escala según resultados. La mayoría de nuestras alianzas a largo plazo comenzaron con dos a cuatro ingenieros y evolucionaron a squads gestionados con ownership completo.',
            ],
          },
        ],
      },
      pt: {
        title: 'Staff Augmentation Nearshore do Brasil: Guia Prático',
        description:
          'Por que empresas globais escolhem o Brasil e LATAM para times de engenharia nearshore — fusos horários, talento e experiência enterprise.',
        tag: 'Nearshore',
        sections: [
          {
            paragraphs: [
              'Staff augmentation nearshore permite que empresas expandam capacidade de engenharia sem a complexidade de abrir um escritório no exterior. O Brasil se tornou um dos destinos nearshore mais atraentes para companhias da América do Norte e Europa — não apenas pelo custo, mas pelo alinhamento de fusos horários, fluência em inglês e um ecossistema maduro de software corporativo.',
              'A 3035TECH entrega times nearshore para clientes como ClickFunnels (EUA), LunchTeam (Irlanda) e GoMoney (global) há mais de uma década. Engenheiros trabalham em horários compatíveis com a costa leste dos EUA e Europa, participam de dailies e integram diretamente as ferramentas do cliente.',
            ],
          },
          {
            heading: 'Quando o augmentation nearshore faz sentido',
            paragraphs: [
              'Staff augmentation funciona melhor quando há roadmap claro, processos de engenharia estabelecidos e necessidade de acelerar entregas sem contratar localmente. Casos típicos: escalar um squad frontend React, adicionar capacidade backend para integrações de API ou preencher papéis especializados.',
              'Diferente do outsourcing offshore com entrega por handoff, o augmentation nearshore mantém engenheiros embarcados no seu time, seguindo seus padrões de código e construindo conhecimento institucional junto aos desenvolvedores internos.',
            ],
          },
          {
            heading: 'O que avaliar em um parceiro nearshore',
            paragraphs: [
              'Empresas devem avaliar sobreposição de fusos horários, padrões de comunicação em inglês, retenção de talento e experiência com stacks similares. Engenheiros da 3035TECH são especialistas em React, Java/Spring Boot, React Native e arquiteturas cloud-native.',
              'Se você avalia opções nearshore a partir do Brasil, comece com um time pequeno embarcado e escale conforme os resultados. A maioria das nossas parcerias de longo prazo começou com dois a quatro engenheiros e evoluiu para squads gerenciados com ownership completo.',
            ],
          },
        ],
      },
      de: {
        title: 'Nearshore Staff Augmentation aus Brasilien: Praxisleitfaden',
        description:
          'Warum globale Unternehmen Brasilien und LATAM für Nearshore-Engineering-Teams wählen — Zeitzonen, Talenttiefe und Enterprise-Erfahrung.',
        tag: 'Nearshore',
        sections: [
          {
            paragraphs: [
              'Nearshore Staff Augmentation ermöglicht Unternehmen, Engineering-Kapazität zu erweitern, ohne ein neues Büro im Ausland aufzubauen. Brasilien ist zu einem der attraktivsten Nearshore-Ziele für nordamerikanische und europäische Unternehmen geworden — nicht allein wegen der Kosten, sondern wegen Zeitzonen-Alignment, Englischkenntnissen und einem reifen Enterprise-Software-Ökosystem.',
              '3035TECH liefert Nearshore-Teams für Kunden wie ClickFunnels (USA), LunchTeam (Irland) und GoMoney (global) seit über einem Jahrzehnt. Ingenieure arbeiten in überlappenden Zeiten mit der US-Ostküste und Europa, nehmen an Daily Standups teil und integrieren sich direkt in Kunden-Tools.',
            ],
          },
          {
            heading: 'Wann Nearshore Augmentation sinnvoll ist',
            paragraphs: [
              'Staff Augmentation funktioniert am besten bei klarem Product Roadmap, etablierten Engineering-Prozessen und dem Bedarf, Delivery zu beschleunigen ohne lokale Einstellungen. Typische Use Cases: React-Frontend-Squad skalieren, Backend-Kapazität für API-Integrationen oder spezialisierte Rollen.',
              'Anders als Offshore-Outsourcing mit Handoff-Delivery bleiben Nearshore-Ingenieure im Team eingebettet, folgen Ihren Code-Standards und bauen institutionelles Wissen neben internen Entwicklern auf.',
            ],
          },
          {
            heading: 'Worauf bei einem Nearshore-Partner achten',
            paragraphs: [
              'Enterprise-Kunden sollten Zeitzonen-Overlap, Englisch-Standards, Retention und Erfahrung mit ähnlichen Tech Stacks bewerten. 3035TECH-Ingenieure spezialisieren sich auf React, Java/Spring Boot, React Native und Cloud-native Architekturen.',
              'Wenn Sie Nearshore-Optionen aus Brasilien evaluieren, starten Sie mit einem kleinen eingebetteten Team und skalieren nach Delivery-Ergebnissen. Die meisten langfristigen Partnerschaften begannen mit zwei bis vier Ingenieuren und wuchsen zu Managed Squads.',
            ],
          },
        ],
      },
    },
  },
  {
    slug: 'managed-squads-vs-staff-augmentation',
    publishedAt: '2026-04-02',
    readingTimeMinutes: 5,
    content: {
      en: {
        title: 'Managed Squads vs Staff Augmentation: Which Model Fits Your Team?',
        description:
          'A decision framework for choosing between embedded engineers and end-to-end managed squads for enterprise software delivery.',
        tag: 'Managed Squads',
        sections: [
          {
            paragraphs: [
              'Enterprises scaling software delivery face a common question: should we augment our existing team with embedded engineers, or partner with a managed squad that owns delivery end-to-end? Both models work — the right choice depends on your internal capacity, governance requirements, and how much delivery ownership you want to retain.',
              'At 3035TECH, we operate both models simultaneously for clients like ClickFunnels (managed squad for funnel builder, staff augmentation for site builder) and DoctorClin (dedicated managed squads for their entire digital portfolio).',
            ],
          },
          {
            heading: 'Staff augmentation: embedded capacity',
            paragraphs: [
              'Staff augmentation adds senior engineers directly into your team. You provide direction, priorities, and architecture decisions. The augmented engineers follow your processes, use your tools, and report to your engineering leadership. This model works when you have strong internal leadership and need to fill specific skill gaps or accelerate a known roadmap.',
            ],
          },
          {
            heading: 'Managed squads: end-to-end ownership',
            paragraphs: [
              'Managed squads combine engineering, delivery management, and technical leadership under one partner. The squad receives objectives — not just tickets — and owns outcomes from design handoff through production deployment. This model works when you need to unblock delivery bottlenecks, launch a new product area, or reduce the management overhead of coordinating multiple vendors.',
              '3035TECH managed squads typically include tech leads, engineers, and QA, operating with agile ceremonies and direct alignment to business outcomes. Clients like Arezzo and DoctorClin use this model for strategic, high-impact initiatives where speed and ownership matter more than direct day-to-day control.',
            ],
          },
          {
            heading: 'How to decide',
            paragraphs: [
              'Choose staff augmentation if you have established engineering leadership and need scalable capacity. Choose managed squads if you need a partner to own delivery outcomes and reduce coordination overhead. Many enterprises start with augmentation and evolve to managed squads as trust and scope grow — 3035TECH supports both transitions seamlessly.',
            ],
          },
        ],
      },
      es: {
        title: 'Squads Gestionados vs Staff Augmentation: ¿Qué Modelo Necesitas?',
        description:
          'Marco de decisión para elegir entre ingenieros embebidos y squads gestionados end-to-end en entregas enterprise.',
        tag: 'Squads Gestionados',
        sections: [
          {
            paragraphs: [
              'Las empresas que escalan entregas de software enfrentan una pregunta común: ¿debemos aumentar nuestro equipo con ingenieros embebidos o asociarnos con un squad gestionado que asuma la entrega end-to-end? Ambos modelos funcionan — la elección depende de tu capacidad interna, gobernanza y cuánto ownership de entrega quieres retener.',
              'En 3035TECH operamos ambos modelos simultáneamente para clientes como ClickFunnels (squad gestionado para funnel builder, staff augmentation para site builder) y DoctorClin (squads dedicados para todo su portafolio digital).',
            ],
          },
          {
            heading: 'Staff augmentation: capacidad embebida',
            paragraphs: [
              'El staff augmentation añade ingenieros senior directamente a tu equipo. Tú defines dirección, prioridades y arquitectura. Los ingenieros siguen tus procesos, herramientas y reportan a tu liderazgo de ingeniería. Funciona cuando tienes liderazgo interno sólido y necesitas cubrir brechas de skills o acelerar un roadmap definido.',
            ],
          },
          {
            heading: 'Squads gestionados: ownership end-to-end',
            paragraphs: [
              'Los squads gestionados combinan ingeniería, gestión de entrega y liderazgo técnico bajo un solo partner. El squad recibe objetivos — no solo tickets — y asume resultados desde el handoff de diseño hasta producción. Funciona cuando necesitas desbloquear cuellos de botella, lanzar una nueva área de producto o reducir overhead de coordinación.',
              'Los squads de 3035TECH incluyen tech leads, ingenieros y QA, con ceremonias ágiles alineadas a resultados de negocio. Clientes como Arezzo y DoctorClin usan este modelo para iniciativas estratégicas de alto impacto.',
            ],
          },
          {
            heading: 'Cómo decidir',
            paragraphs: [
              'Elige staff augmentation si tienes liderazgo de ingeniería establecido y necesitas capacidad escalable. Elige squads gestionados si necesitas un partner que asuma outcomes de entrega. Muchas empresas comienzan con augmentation y evolucionan a squads gestionados — 3035TECH soporta ambas transiciones.',
            ],
          },
        ],
      },
      pt: {
        title: 'Squads Gerenciados vs Staff Augmentation: Qual Modelo Escolher?',
        description:
          'Framework de decisão para escolher entre engenheiros embarcados e squads gerenciados end-to-end em entregas enterprise.',
        tag: 'Squads Gerenciados',
        sections: [
          {
            paragraphs: [
              'Empresas que escalam entregas de software enfrentam uma pergunta comum: devemos ampliar nosso time com engenheiros embarcados ou fazer parceria com um squad gerenciado que assume a entrega end-to-end? Ambos os modelos funcionam — a escolha depende da capacidade interna, governança e quanto ownership de entrega você quer manter.',
              'Na 3035TECH operamos ambos os modelos simultaneamente para clientes como ClickFunnels (squad gerenciado para funnel builder, staff augmentation para site builder) e DoctorClin (squads dedicados para todo o portfólio digital).',
            ],
          },
          {
            heading: 'Staff augmentation: capacidade embarcada',
            paragraphs: [
              'Staff augmentation adiciona engenheiros sênior diretamente ao seu time. Você define direção, prioridades e arquitetura. Os engenheiros seguem seus processos, ferramentas e reportam à sua liderança de engenharia. Funciona quando há liderança interna sólida e necessidade de cobrir gaps de skills ou acelerar um roadmap definido.',
            ],
          },
          {
            heading: 'Squads gerenciados: ownership end-to-end',
            paragraphs: [
              'Squads gerenciados combinam engenharia, gestão de entrega e liderança técnica sob um único parceiro. O squad recebe objetivos — não apenas tickets — e assume resultados do handoff de design até produção. Funciona quando você precisa destravar gargalos, lançar uma nova área de produto ou reduzir overhead de coordenação.',
              'Squads da 3035TECH incluem tech leads, engenheiros e QA, com cerimônias ágeis alinhadas a resultados de negócio. Clientes como Arezzo e DoctorClin usam este modelo para iniciativas estratégicas de alto impacto.',
            ],
          },
          {
            heading: 'Como decidir',
            paragraphs: [
              'Escolha staff augmentation se tem liderança de engenharia estabelecida e precisa de capacidade escalável. Escolha squads gerenciados se precisa de um parceiro que assuma outcomes de entrega. Muitas empresas começam com augmentation e evoluem para squads gerenciados — a 3035TECH suporta ambas as transições.',
            ],
          },
        ],
      },
      de: {
        title: 'Managed Squads vs Staff Augmentation: Welches Modell passt?',
        description:
          'Entscheidungsrahmen für eingebettete Ingenieure vs. End-to-End Managed Squads bei Enterprise-Software-Delivery.',
        tag: 'Managed Squads',
        sections: [
          {
            paragraphs: [
              'Unternehmen, die Software-Delivery skalieren, stellen sich eine gemeinsame Frage: Sollen wir unser Team mit eingebetteten Ingenieuren erweitern oder mit einem Managed Squad partnern, das End-to-End liefert? Beide Modelle funktionieren — die Wahl hängt von interner Kapazität, Governance und gewünschtem Delivery-Ownership ab.',
              'Bei 3035TECH betreiben wir beide Modelle gleichzeitig für Kunden wie ClickFunnels (Managed Squad für Funnel Builder, Staff Augmentation für Site Builder) und DoctorClin (dedizierte Squads für das gesamte digitale Portfolio).',
            ],
          },
          {
            heading: 'Staff Augmentation: eingebettete Kapazität',
            paragraphs: [
              'Staff Augmentation fügt Senior-Ingenieure direkt Ihrem Team hinzu. Sie geben Richtung, Prioritäten und Architektur vor. Die Ingenieure folgen Ihren Prozessen und Tools und berichten an Ihre Engineering-Leitung. Ideal bei starker interner Führung und spezifischen Skill-Gaps.',
            ],
          },
          {
            heading: 'Managed Squads: End-to-End-Ownership',
            paragraphs: [
              'Managed Squads kombinieren Engineering, Delivery Management und technische Führung unter einem Partner. Das Squad erhält Ziele — nicht nur Tickets — und verantwortet Ergebnisse vom Design-Handoff bis Production. Ideal bei Delivery-Engpässen, neuen Produktbereichen oder reduziertem Koordinationsaufwand.',
              '3035TECH Managed Squads umfassen Tech Leads, Ingenieure und QA mit agilen Zeremonien, ausgerichtet auf Business Outcomes. Kunden wie Arezzo und DoctorClin nutzen dieses Modell für strategische Initiativen.',
            ],
          },
          {
            heading: 'Entscheidungshilfe',
            paragraphs: [
              'Wählen Sie Staff Augmentation bei etablierter Engineering-Führung und skalierbarem Kapazitätsbedarf. Wählen Sie Managed Squads, wenn ein Partner Delivery-Outcomes übernehmen soll. Viele Unternehmen starten mit Augmentation und wachsen zu Managed Squads — 3035TECH unterstützt beide Übergänge.',
            ],
          },
        ],
      },
    },
  },
  {
    slug: 'enterprise-react-development-at-scale',
    publishedAt: '2026-04-20',
    readingTimeMinutes: 7,
    content: {
      en: {
        title: 'Enterprise React Development at Scale: Lessons from 50+ Projects',
        description:
          'Architecture patterns, team structures, and delivery practices for building React applications that survive enterprise complexity.',
        tag: 'React',
        sections: [
          {
            paragraphs: [
              'React dominates enterprise frontend development — and for good reason. Component-based architecture, a massive ecosystem, and strong hiring pools make it the default choice for platforms that need to evolve over years. But enterprise React is not the same as a startup MVP. Large codebases, multiple teams, design systems, and legacy integrations introduce complexity that requires deliberate architecture and delivery practices.',
              '3035TECH has built and evolved React platforms for ClickFunnels, Arezzo, GoMoney, and dozens of other enterprise clients since 2015. Here are the patterns that consistently work at scale.',
            ],
          },
          {
            heading: 'Architecture that scales with teams',
            paragraphs: [
              'Feature-based folder structures, clear module boundaries, and shared design systems prevent the "big ball of mud" that kills velocity after the first year. We standardize on TypeScript, enforce linting in CI, and use component libraries aligned to each client\'s brand — whether building from scratch or extending an existing system.',
              'For complex products like ClickFunnels 2.0, we operated as a frontend squad receiving design specs and delivering features end-to-end — proving that external teams can match internal velocity when architecture and processes are aligned.',
            ],
          },
          {
            heading: 'Delivery practices for long-lived products',
            paragraphs: [
              'Enterprise React projects succeed when teams own outcomes, not just story points. That means tech leads who understand business context, QA integrated into the sprint cycle, and deployment pipelines that support staged rollouts. Our squads follow agile delivery with direct client alignment — daily standups, sprint reviews, and continuous deployment to staging and production environments.',
            ],
          },
          {
            heading: 'When to partner vs build internally',
            paragraphs: [
              'Internal teams should own product vision and core architecture. Partner teams excel at accelerating specific workstreams — a new module, a platform rewrite, or sustained feature delivery — without the hiring timeline of building a full squad locally. 3035TECH React squads integrate into client repos, follow client conventions, and transfer knowledge continuously so internal teams retain control as partnerships evolve.',
            ],
          },
        ],
      },
      es: {
        title: 'Desarrollo React Enterprise a Escala: Lecciones de 50+ Proyectos',
        description:
          'Patrones de arquitectura, estructuras de equipo y prácticas de entrega para aplicaciones React en entornos enterprise.',
        tag: 'React',
        sections: [
          {
            paragraphs: [
              'React domina el desarrollo frontend enterprise — y con razón. Arquitectura basada en componentes, ecosistema masivo y pool de talento lo convierten en la opción por defecto para plataformas que evolucionan durante años. Pero React enterprise no es un MVP de startup. Codebases grandes, múltiples equipos, design systems e integraciones legacy requieren arquitectura y prácticas deliberadas.',
              '3035TECH ha construido y evolucionado plataformas React para ClickFunnels, Arezzo, GoMoney y docenas de clientes enterprise desde 2015.',
            ],
          },
          {
            heading: 'Arquitectura que escala con equipos',
            paragraphs: [
              'Estructuras por features, límites de módulos claros y design systems compartidos previenen la pérdida de velocidad después del primer año. Estandarizamos TypeScript, linting en CI y bibliotecas de componentes alineadas a la marca del cliente.',
              'Para productos complejos como ClickFunnels 2.0, operamos como squad frontend recibiendo specs de diseño y entregando features end-to-end.',
            ],
          },
          {
            heading: 'Prácticas de entrega para productos de larga vida',
            paragraphs: [
              'Los proyectos React enterprise tienen éxito cuando los equipos asumen outcomes, no solo story points. Eso significa tech leads con contexto de negocio, QA integrado al sprint y pipelines de deploy con rollouts graduales.',
            ],
          },
          {
            heading: 'Cuándo asociarse vs construir internamente',
            paragraphs: [
              'Los equipos internos deben poseer la visión de producto y arquitectura core. Los equipos partner aceleran workstreams específicos — un módulo nuevo, un rewrite de plataforma o entrega sostenida de features — sin el timeline de contratación local. Los squads React de 3035TECH se integran en repos del cliente y transfieren conocimiento continuamente.',
            ],
          },
        ],
      },
      pt: {
        title: 'Desenvolvimento React Enterprise em Escala: Lições de 50+ Projetos',
        description:
          'Padrões de arquitetura, estruturas de time e práticas de entrega para aplicações React em ambientes enterprise.',
        tag: 'React',
        sections: [
          {
            paragraphs: [
              'React domina o desenvolvimento frontend enterprise — e com razão. Arquitetura baseada em componentes, ecossistema massivo e pool de talento o tornam a escolha padrão para plataformas que evoluem por anos. Mas React enterprise não é um MVP de startup. Codebases grandes, múltiplos times, design systems e integrações legacy exigem arquitetura e práticas deliberadas.',
              'A 3035TECH construiu e evoluiu plataformas React para ClickFunnels, Arezzo, GoMoney e dezenas de clientes enterprise desde 2015.',
            ],
          },
          {
            heading: 'Arquitetura que escala com times',
            paragraphs: [
              'Estruturas por features, limites de módulos claros e design systems compartilhados previnem perda de velocidade após o primeiro ano. Padronizamos TypeScript, linting em CI e bibliotecas de componentes alinhadas à marca do cliente.',
              'Para produtos complexos como ClickFunnels 2.0, operamos como squad frontend recebendo specs de design e entregando features end-to-end.',
            ],
          },
          {
            heading: 'Práticas de entrega para produtos de longa duração',
            paragraphs: [
              'Projetos React enterprise têm sucesso quando times assumem outcomes, não apenas story points. Isso significa tech leads com contexto de negócio, QA integrado ao sprint e pipelines de deploy com rollouts graduais.',
            ],
          },
          {
            heading: 'Quando fazer parceria vs construir internamente',
            paragraphs: [
              'Times internos devem possuir visão de produto e arquitetura core. Times parceiros aceleram workstreams específicos — um módulo novo, rewrite de plataforma ou entrega sustentada de features — sem o timeline de contratação local. Squads React da 3035TECH integram repos do cliente e transferem conhecimento continuamente.',
            ],
          },
        ],
      },
      de: {
        title: 'Enterprise React-Entwicklung im großen Maßstab: Lehren aus 50+ Projekten',
        description:
          'Architekturmuster, Teamstrukturen und Delivery-Praktiken für React-Anwendungen in Enterprise-Umgebungen.',
        tag: 'React',
        sections: [
          {
            paragraphs: [
              'React dominiert Enterprise-Frontend-Entwicklung — aus gutem Grund. Komponentenbasierte Architektur, massives Ökosystem und Talentpool machen es zur Standardwahl für Plattformen, die sich über Jahre entwickeln. Aber Enterprise React ist kein Startup-MVP. Große Codebases, mehrere Teams, Design Systems und Legacy-Integrationen erfordern deliberate Architektur.',
              '3035TECH hat seit 2015 React-Plattformen für ClickFunnels, Arezzo, GoMoney und Dutzende Enterprise-Kunden gebaut und weiterentwickelt.',
            ],
          },
          {
            heading: 'Architektur, die mit Teams skaliert',
            paragraphs: [
              'Feature-basierte Strukturen, klare Modulgrenzen und geteilte Design Systems verhindern Velocity-Verlust nach dem ersten Jahr. Wir standardisieren TypeScript, Linting in CI und Component Libraries aligned zur Kundenmarke.',
              'Für komplexe Produkte wie ClickFunnels 2.0 operierten wir als Frontend-Squad mit Design-Specs und End-to-End-Feature-Delivery.',
            ],
          },
          {
            heading: 'Delivery-Praktiken für langfristige Produkte',
            paragraphs: [
              'Enterprise React-Projekte gelingen, wenn Teams Outcomes verantworten, nicht nur Story Points. Das bedeutet Tech Leads mit Business-Kontext, QA im Sprint-Zyklus und Deployment-Pipelines mit gestaffelten Rollouts.',
            ],
          },
          {
            heading: 'Wann partnern vs. intern bauen',
            paragraphs: [
              'Interne Teams sollten Product Vision und Core-Architektur besitzen. Partner-Teams beschleunigen spezifische Workstreams — neues Modul, Platform Rewrite oder sustained Feature Delivery — ohne lokale Hiring-Timeline. 3035TECH React-Squads integrieren sich in Kunden-Repos und transferieren Wissen kontinuierlich.',
            ],
          },
        ],
      },
    },
  },
]

const posts = [...additionalBlogPosts, ...coreBlogPosts].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt)
)

export const blogSlugs = posts.map((p) => p.slug)

export function getBlogPosts(locale: Locale) {
  return posts.map((post) => ({
    slug: post.slug,
    publishedAt: post.publishedAt,
    readingTimeMinutes: post.readingTimeMinutes,
    ...post.content[locale],
  }))
}

export function getBlogPost(locale: Locale, slug: string) {
  const post = posts.find((p) => p.slug === slug)
  if (!post) return undefined
  return {
    slug: post.slug,
    publishedAt: post.publishedAt,
    readingTimeMinutes: post.readingTimeMinutes,
    ...post.content[locale],
  }
}

export function getRelatedBlogPosts(locale: Locale, slug: string, limit = 2) {
  return getBlogPosts(locale).filter((post) => post.slug !== slug).slice(0, limit)
}

export function getBlogIndexMeta(locale: Locale) {
  const titles: Record<Locale, { title: string; description: string }> = {
    en: {
      title: 'Insights — Nearshore, Squads & Enterprise Engineering',
      description:
        'Technical articles on nearshore staff augmentation, managed squads, and enterprise React development from 3035TECH.',
    },
    es: {
      title: 'Insights — Nearshore, Squads e Ingeniería Enterprise',
      description:
        'Artículos técnicos sobre staff augmentation nearshore, squads gestionados y desarrollo React enterprise por 3035TECH.',
    },
    pt: {
      title: 'Insights — Nearshore, Squads e Engenharia Enterprise',
      description:
        'Artigos técnicos sobre staff augmentation nearshore, squads gerenciados e desenvolvimento React enterprise pela 3035TECH.',
    },
    de: {
      title: 'Insights — Nearshore, Squads & Enterprise Engineering',
      description:
        'Technische Artikel über Nearshore Staff Augmentation, Managed Squads und Enterprise React-Entwicklung von 3035TECH.',
    },
  }
  return titles[locale]
}

export function blogPostUrl(locale: Locale, slug: string) {
  return `${siteUrl}${localizedPath(locale, `/blog/${slug}`)}`
}

export const blogIndexPaths = locales.flatMap((locale) => [
  localizedPath(locale, '/blog'),
  ...blogSlugs.map((slug) => localizedPath(locale, `/blog/${slug}`)),
])
