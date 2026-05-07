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
  const path = '/privacy-policy'

  return {
    title: 'Privacy Policy - Toons Universe Wiki',
    description:
      'Read the Privacy Policy for Toons Universe Wiki, including data collection, analytics usage, cookies, and your privacy rights.',
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
      title: 'Privacy Policy - Toons Universe Wiki',
      description: 'How Toons Universe Wiki collects and protects data.',
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
      title: 'Privacy Policy - Toons Universe Wiki',
      description: 'How Toons Universe Wiki collects and protects data.',
      images: [`${siteUrl}/images/hero.webp`],
    },
    alternates: buildLanguageAlternates(path, locale as Locale, siteUrl),
  }
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative border-b border-border px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Privacy Policy</h1>
          <p className="mb-2 text-lg text-slate-300">How we collect, use, and protect information</p>
          <p className="text-sm text-slate-400">Last Updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>1. Scope</h2>
            <p>
              This Privacy Policy applies to Toons Universe Wiki, an unofficial fan-made knowledge site for the Roblox
              game Toons Universe.
            </p>

            <h2>2. Information We Collect</h2>
            <ul>
              <li>
                <strong>Usage Data:</strong> Browser type, page views, referral pages, and device-level diagnostics.
              </li>
              <li>
                <strong>Local Preferences:</strong> Language and theme settings stored in your browser for usability.
              </li>
              <li>
                <strong>Cookie Data:</strong> Functional and analytics cookies used to improve site performance.
              </li>
            </ul>

            <h2>3. Why We Use Data</h2>
            <ul>
              <li>Operate and maintain Toons Universe Wiki.</li>
              <li>Measure feature usage and content quality.</li>
              <li>Diagnose errors and improve reliability.</li>
              <li>Prevent abuse and bot-driven disruption.</li>
            </ul>

            <h2>4. Analytics and Advertising</h2>
            <p>
              We may use analytics and ad partners to understand aggregate traffic and maintain the site. These services
              may set their own cookies subject to their own privacy policies.
            </p>

            <h2>5. Third-Party Links</h2>
            <p>
              Our pages link to third-party platforms such as Roblox, Discord, Reddit, and YouTube. We do not control
              the privacy practices of those websites.
            </p>

            <h2>6. Children&apos;s Privacy</h2>
            <p>
              We do not knowingly collect personal information from children under 13. If you believe a child has
              submitted personal information, contact us and we will remove it when feasible.
            </p>

            <h2>7. Data Retention</h2>
            <p>
              We retain non-identifying analytics data only as long as needed for operational and measurement purposes,
              unless a longer period is required by law.
            </p>

            <h2>8. Security</h2>
            <p>
              We apply reasonable technical safeguards, but no transmission or storage method is fully secure. Use of
              the site is at your own risk.
            </p>

            <h2>9. Policy Updates</h2>
            <p>
              We may update this policy periodically. Material changes will be reflected by updating the "Last Updated"
              date on this page.
            </p>

            <h2>10. Contact</h2>
            <p>
              Privacy inquiries: <a href="mailto:privacy@toonsuniverse.wiki">privacy@toonsuniverse.wiki</a>
            </p>

            <div className="mt-10 rounded-xl border border-border bg-card p-5">
              <p className="mb-3 text-sm text-muted-foreground">
                This website is unofficial and is not affiliated with Roblox Corporation or Toon Shenanigans.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/terms-of-service" className="hover:text-[hsl(var(--nav-theme-light))]">
                  Terms of Service
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
