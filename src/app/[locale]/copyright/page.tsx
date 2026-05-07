import Link from 'next/link'
import type { Metadata } from 'next'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'

interface Props {
  params: Promise<{ locale: string }>
}

const LAST_UPDATED = 'May 7, 2026'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.toonsuniverse.wiki'
  const path = '/copyright'

  return {
    title: 'Copyright Notice - Toons Universe Wiki',
    description:
      'Copyright policy for Toons Universe Wiki, including ownership, fair use, and DMCA notice procedures.',
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale,
      url: locale === 'en' ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`,
      siteName: 'Toons Universe Wiki',
      title: 'Copyright Notice - Toons Universe Wiki',
      description: 'Copyright, fair use, and DMCA policy information.',
      images: [
        {
          url: `${siteUrl}/images/hero.webp`,
          width: 1920,
          height: 1080,
          alt: 'Toons Universe Wiki',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Copyright Notice - Toons Universe Wiki',
      description: 'Copyright, fair use, and DMCA policy information.',
      images: [`${siteUrl}/images/hero.webp`],
    },
    alternates: buildLanguageAlternates(path, locale as Locale, siteUrl),
  }
}

export default function Copyright() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative border-b border-border px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Copyright Notice</h1>
          <p className="mb-2 text-lg text-slate-300">Intellectual property and usage policy</p>
          <p className="text-sm text-slate-400">Last Updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>1. Website Content</h2>
            <p>
              Copyright © 2026 Toons Universe Wiki. Original articles, analyses, and website design are protected under
              applicable copyright laws.
            </p>

            <h2>2. Game-Related Assets</h2>
            <p>
              Toons Universe characters, names, logos, and game assets are the property of their respective owners. This
              site is unofficial and uses references for informational and commentary purposes.
            </p>

            <h2>3. Fair Use</h2>
            <p>
              Limited excerpts, screenshots, and references may be used for educational, editorial, and community guide
              purposes under fair use principles where applicable.
            </p>

            <h2>4. User Submissions</h2>
            <p>
              By submitting content to our community channels, you confirm you own the rights to that content and grant
              us a non-exclusive right to display and edit it for publication.
            </p>

            <h2>5. DMCA Notice</h2>
            <p>
              If you believe material on this site infringes your rights, send a notice containing sufficient detail and
              proof of ownership.
            </p>
            <p>
              DMCA contact: <a href="mailto:dmca@toonsuniverse.wiki">dmca@toonsuniverse.wiki</a>
            </p>

            <h2>6. Counter-Notice</h2>
            <p>
              If material was removed in error, you may submit a counter-notice with identifying details and legal
              declaration of good-faith belief.
            </p>

            <h2>7. Trademark Notice</h2>
            <p>
              Roblox and related marks are trademarks of Roblox Corporation. Any other third-party marks remain the
              property of their respective owners.
            </p>

            <div className="mt-10 rounded-xl border border-border bg-card p-5">
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/about" className="hover:text-[hsl(var(--nav-theme-light))]">
                  About
                </Link>
                <Link href="/privacy-policy" className="hover:text-[hsl(var(--nav-theme-light))]">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="hover:text-[hsl(var(--nav-theme-light))]">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
