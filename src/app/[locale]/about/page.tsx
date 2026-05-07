import Link from 'next/link'
import type { Metadata } from 'next'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.toonsuniverse.wiki'
  const path = '/about'

  return {
    title: 'About Toons Universe Wiki',
    description:
      'Learn about Toons Universe Wiki, an unofficial fan-made resource for Roblox players focused on codes, agents, infected enemies, floors, and strategy guides.',
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
      title: 'About Toons Universe Wiki',
      description: 'About our mission and editorial standards for Toons Universe guides.',
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
      title: 'About Toons Universe Wiki',
      description: 'About our mission and editorial standards for Toons Universe guides.',
      images: [`${siteUrl}/images/hero.webp`],
    },
    alternates: buildLanguageAlternates(path, locale as Locale, siteUrl),
  }
}

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative border-b border-border px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">About Toons Universe Wiki</h1>
          <p className="text-lg text-slate-300">Community-driven guides for Roblox players exploring INNOVA</p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>What We Are</h2>
            <p>
              Toons Universe Wiki is an unofficial fan-made knowledge base focused on practical information for Toons
              Universe players, including codes, agent breakdowns, infected behavior, floor progression, and resource
              routes.
            </p>

            <h2>Our Mission</h2>
            <ul>
              <li>Publish accurate, up-to-date strategy content.</li>
              <li>Document mechanics with clear examples and revision history.</li>
              <li>Help new and experienced players find actionable answers quickly.</li>
              <li>Keep guides readable on desktop and mobile.</li>
            </ul>

            <h2>Editorial Principles</h2>
            <ul>
              <li>Prioritize verifiable in-game behavior and patch-note evidence.</li>
              <li>Mark uncertain information and avoid speculation as fact.</li>
              <li>Revise pages after major updates and rebalance patches.</li>
            </ul>

            <h2>Community and Sources</h2>
            <p>
              We track official announcements and player-observed changes from community channels such as Roblox,
              Discord, YouTube, and Reddit.
            </p>

            <h2>Contact</h2>
            <p>
              General inquiries: <a href="mailto:hello@toonsuniverse.wiki">hello@toonsuniverse.wiki</a>
            </p>

            <p>
              Toons Universe Wiki is not affiliated with Roblox Corporation, Toon Shenanigans, or any official game
              publisher.
            </p>

            <div className="mt-10 rounded-xl border border-border bg-card p-5">
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/privacy-policy" className="hover:text-[hsl(var(--nav-theme-light))]">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="hover:text-[hsl(var(--nav-theme-light))]">
                  Terms of Service
                </Link>
                <Link href="/copyright" className="hover:text-[hsl(var(--nav-theme-light))]">
                  Copyright Notice
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
