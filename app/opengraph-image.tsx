import { ImageResponse } from 'next/og'

export const alt = '3035TECH — Your Global Technology Partner'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '900px',
          }}
        >
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

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px 20px',
              borderRadius: 999,
              backgroundColor: 'rgba(124,58,237,0.08)',
              border: '1px solid rgba(124,58,237,0.15)',
              marginBottom: 32,
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
              Your Global Technology Partner
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              fontSize: 56,
              fontFamily: 'Instrument Serif',
              color: '#FFFFFF',
              lineHeight: 1.15,
              marginBottom: 24,
            }}
          >
            <span>We engineer the</span>
            <span
              style={{
                color: '#A78BFA',
                fontStyle: 'italic',
                marginLeft: 12,
                marginRight: 12,
              }}
            >
              technology
            </span>
            <span>behind your business growth.</span>
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: 22,
              fontFamily: 'DM Sans',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.5,
              maxWidth: '780px',
            }}
          >
            Managed squads, staff augmentation, and custom software for
            enterprises worldwide.
          </div>
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
    {
      ...size,
      fonts: [
        {
          name: 'Instrument Serif',
          data: instrumentSerif,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'DM Sans',
          data: dmSans,
          style: 'normal',
          weight: 400,
        },
        {
          name: 'DM Sans',
          data: dmSansBold,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  )
}
