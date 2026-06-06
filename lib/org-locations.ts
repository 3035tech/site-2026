/** Shared schema.org location data for 3035TECH offices */

export const headquartersAddress = {
  '@type': 'PostalAddress' as const,
  streetAddress: 'Hub 5796',
  addressLocality: 'Campo Bom',
  addressRegion: 'RS',
  postalCode: '93700-000',
  addressCountry: 'BR',
}

export const europeHubAddress = {
  '@type': 'PostalAddress' as const,
  addressLocality: 'Dublin',
  addressRegion: 'Leinster',
  addressCountry: 'IE',
}

export const dublinMapsUrl =
  'https://www.google.com/maps/search/?api=1&query=3035TECH+Dublin+Ireland'

export const dublinGeo = {
  latitude: 53.3498,
  longitude: -6.2603,
} as const

export const organizationLocations = [
  {
    '@type': 'Place' as const,
    name: '3035TECH Engineering Center',
    address: headquartersAddress,
  },
  {
    '@type': 'Place' as const,
    name: '3035TECH European Hub',
    description: 'European projects and commercial hub',
    address: europeHubAddress,
  },
]
