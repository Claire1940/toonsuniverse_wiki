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
  const path = '/terms-of-service'

  return {
    title: 'Terms of Service - Toons Universe Wiki',
    description:
      'Read the Terms of Service for Toons Universe Wiki, including acceptable use, intellectual property, and liability limitations.',
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
      title: 'Terms of Service - Toons Universe Wiki',
      description: 'Terms and conditions for using Toons Universe Wiki.',
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
      title: 'Terms of Service - Toons Universe Wiki',
      description: 'Terms and conditions for using Toons Universe Wiki.',
      images: [`${siteUrl}/images/hero.webp`],
    },
    alternates: buildLanguageAlternates(path, locale as Locale, siteUrl),
  }
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative border-b border-border px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Terms of Service</h1>
          <p className="mb-2 text-lg text-slate-300">Rules and terms for using this website</p>
          <p className="text-sm text-slate-400">Last Updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing Toons Universe Wiki, you agree to these Terms of Service. If you disagree with any part,
              please discontinue use of the site.
            </p>

            <h2>2. Service Description</h2>
            <p>
              Toons Universe Wiki is an unofficial fan-made informational site for Roblox players. We publish guides,
              codes, strategy references, and update tracking.
            </p>

            <h2>3. Acceptable Use</h2>
            <ul>
              <li>Do not attempt unauthorized access to systems or data.</li>
              <li>Do not abuse crawlers, scraping, or automated attacks.</li>
              <li>Do not publish harmful, illegal, or infringing content through our channels.</li>
              <li>Do not impersonate staff, moderators, or official game developers.</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              Original website content is owned by Toons Universe Wiki unless stated otherwise. Toons Universe game
              assets, names, and branding belong to their respective owners.
            </p>

            <h2>5. Third-Party Platforms</h2>
            <p>
              We link to Roblox, Discord, Reddit, and YouTube for convenience. We are not responsible for external
              platform content, outages, or policy changes.
            </p>

            <h2>6. No Warranty</h2>
            <p>
              Information is provided "as is" and may become outdated after game patches. We do not guarantee
              completeness, availability, or uninterrupted service.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the fullest extent allowed by law, Toons Universe Wiki is not liable for indirect or consequential
              damages arising from your use of the site.
            </p>

            <h2>8. Changes</h2>
            <p>
              We may update these terms at any time. Continued use after updates means you accept the revised terms.
            </p>

            <h2>9. Contact</h2>
            <p>
              Questions about these terms: <a href="mailto:legal@toonsuniverse.wiki">legal@toonsuniverse.wiki</a>
            </p>

            <div className="mt-10 rounded-xl border border-border bg-card p-5">
              <p className="mb-3 text-sm text-muted-foreground">
                Toons Universe Wiki is unofficial and not affiliated with Roblox Corporation or Toon Shenanigans.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/privacy-policy" className="hover:text-[hsl(var(--nav-theme-light))]">
                  Privacy Policy
                </Link>
                <Link href="/copyright" className="hover:text-[hsl(var(--nav-theme-light))]">
                  Copyright Notice
                </Link>
                <Link href="/about" className="hover:text-[hsl(var(--nav-theme-light))]">
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
