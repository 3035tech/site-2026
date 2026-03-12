export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "3035TECH",
    "alternateName": "3035 Tech",
    "url": "https://3035tech.com",
    "logo": "https://3035tech.com/images/logos/3035tech-logo.svg",
    "description": "Your global technology partner headquartered in Brazil. Managed squads, staff augmentation, and custom software development for enterprises worldwide.",
    "foundingDate": "2015",
    "sameAs": [
      "https://www.linkedin.com/company/3035tech",
      "https://github.com/3035tech"
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Campo Bom",
        "addressRegion": "RS",
        "addressCountry": "BR",
        "description": "Headquarters & Engineering Center"
      },
      {
        "@type": "PostalAddress",
        "addressCountry": "US",
        "description": "North American Operations"
      },
      {
        "@type": "PostalAddress",
        "addressCountry": "IE",
        "description": "European Operations"
      },
      {
        "@type": "PostalAddress",
        "addressCountry": "DE",
        "description": "German Operations"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "contact@3035tech.com",
      "availableLanguage": ["English", "Portuguese", "Spanish", "German"]
    },
    "areaServed": "Worldwide",
    "knowsAbout": [
      "Software Development",
      "Staff Augmentation",
      "Managed Squads",
      "Custom Software",
      "Mobile Development",
      "Web Development",
      "Cloud Solutions",
      "Enterprise Software"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "3035TECH",
    "url": "https://3035tech.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://3035tech.com/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Services",
        "description": "Staff Augmentation, Managed Squads, Software Factory, and Support & Evolution services",
        "url": "https://3035tech.com/#services"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "Case Studies",
        "description": "Real results and partnerships with companies like Arezzo, ClickFunnels, and more",
        "url": "https://3035tech.com/#cases"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "3035TEACH",
        "description": "Our developer training program transforming aspiring talent into enterprise-ready engineers",
        "url": "https://3035tech.com/#teach"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "About",
        "description": "Learn about 3035TECH, our global presence and engineering culture",
        "url": "https://3035tech.com/#about"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "Contact",
        "description": "Get in touch to discuss your next project",
        "url": "https://3035tech.com/#contact"
      }
    ]
  }

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "3035TECH",
    "image": "https://3035tech.com/images/logos/3035tech-logo.svg",
    "url": "https://3035tech.com",
    "telephone": "",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Campo Bom",
      "addressRegion": "RS",
      "addressCountry": "BR"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Staff Augmentation",
            "description": "Extend your team with skilled engineers who integrate seamlessly into your workflow"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Managed Squads",
            "description": "Dedicated cross-functional teams that own delivery from planning to production"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Software Factory",
            "description": "End-to-end product development with full ownership of architecture, quality, and delivery"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Support & Evolution",
            "description": "Ongoing maintenance, optimization, and feature development for existing systems"
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  )
}
