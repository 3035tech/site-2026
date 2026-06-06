import { ImageResponse } from 'next/og'

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = 'image/png'

let fontsPromise: Promise<
  Awaited<ReturnType<typeof loadOgFonts>>
> | null = null

async function loadOgFonts() {
  const [instrumentSerif, dmSans, dmSansBold] = await Promise.all([
    fetch(
      'https://fonts.gstatic.com/s/instrumentserif/v5/jizBRFtNs2ka5fXjeivQ4LroWlx-2zI.ttf'
    ).then((res) => res.arrayBuffer()),
    fetch(
      'https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhTg.ttf'
    ).then((res) => res.arrayBuffer()),
    fetch(
      'https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthTg.ttf'
    ).then((res) => res.arrayBuffer()),
  ])

  return [
    { name: 'Instrument Serif', data: instrumentSerif, style: 'normal' as const, weight: 400 as const },
    { name: 'DM Sans', data: dmSans, style: 'normal' as const, weight: 400 as const },
    { name: 'DM Sans', data: dmSansBold, style: 'normal' as const, weight: 700 as const },
  ]
}

function getFonts() {
  if (!fontsPromise) fontsPromise = loadOgFonts()
  return fontsPromise
}

type OgImageInput = {
  title: string
  description?: string
  label?: string
}

export async function generateOgImage({ title, description, label }: OgImageInput) {
  const fonts = await getFonts()

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#0F172A',
          backgroundImage:
            'radial-gradient(circle at 70% 30%, rgba(124,58,237,0.18) 0%, transparent 55%), linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)',
          backgroundSize: 'auto, 48px 48px, 48px 48px',
          padding: '64px 72px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '960px' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 28,
              fontFamily: 'DM Sans',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: '#A78BFA',
              marginBottom: 28,
            }}
          >
            3035TECH
          </div>

          {label && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 20px',
                borderRadius: 999,
                backgroundColor: 'rgba(124,58,237,0.08)',
                border: '1px solid rgba(124,58,237,0.15)',
                marginBottom: 28,
                alignSelf: 'flex-start',
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  fontFamily: 'DM Sans',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#A78BFA',
                }}
              >
                {label}
              </span>
            </div>
          )}

          <div
            style={{
              display: 'flex',
              fontSize: title.length > 60 ? 44 : 52,
              fontFamily: 'Instrument Serif',
              color: '#FFFFFF',
              lineHeight: 1.15,
              marginBottom: 24,
            }}
          >
            {title}
          </div>

          {description && (
            <div
              style={{
                display: 'flex',
                fontSize: 22,
                fontFamily: 'DM Sans',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.5,
                maxWidth: '900px',
              }}
            >
              {description}
            </div>
          )}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: 14,
              fontFamily: 'DM Sans',
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Brazil · USA · Ireland · Germany
          </span>
          <span
            style={{
              fontSize: 14,
              fontFamily: 'DM Sans',
              color: '#7C3AED',
              fontWeight: 700,
            }}
          >
            3035tech.com
          </span>
        </div>
      </div>
    ),
    { ...ogSize, fonts }
  )
}
