import type { Metadata } from 'next'
import { getLatestArticles } from '@/lib/getLatestArticles'
import type { Language } from '@/lib/content'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'
import HomePageClient from './HomePageClient'

interface PageProps {
  params: Promise<{ locale: string }>
}

const HOME_METADATA = {
  title: 'Toons Universe Wiki - Codes, Agents & Survival Guide',
  description:
    'Find Toons Universe codes, agents, infected enemies, floors, resources, builds and beginner tips for Roblox players exploring the INNOVA facility.',
  imageAlt: 'Toons Universe Wiki - Roblox Survival Horror Guide',
}

const HOME_VIDEO = {
  id: 'btv_z92P180',
  title: 'Toons Universe - Official Trailer',
  url: 'https://www.youtube.com/watch?v=btv_z92P180',
}

const HOME_LINKS = {
  roblox: 'https://www.roblox.com/games/89788834648171/Toons-Universe',
  discord: 'https://discord.com/invite/toonsuniverse',
  reddit: 'https://www.reddit.com/r/ToonsUniverse/',
  youtube: 'https://www.youtube.com/@toonshenanigans',
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.toonsuniverse.wiki').replace(/\/$/, '')
  const canonicalPath = locale === 'en' ? '/' : `/${locale}`

  return {
    title: HOME_METADATA.title,
    description: HOME_METADATA.description,
    alternates: buildLanguageAlternates('/', locale as Locale, siteUrl),
    openGraph: {
      type: 'website',
      siteName: 'Toons Universe Wiki',
      title: HOME_METADATA.title,
      description: HOME_METADATA.description,
      url: `${siteUrl}${canonicalPath}`,
      images: [
        {
          url: `${siteUrl}/images/hero.webp`,
          width: 1920,
          height: 1080,
          alt: HOME_METADATA.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: HOME_METADATA.title,
      description: HOME_METADATA.description,
      images: [`${siteUrl}/images/hero.webp`],
    },
  }
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params

  // 服务器端获取最新文章数据
  const latestArticles = await getLatestArticles(locale as Language, 30)

  return (
    <HomePageClient
      latestArticles={latestArticles}
      moduleLinkMap={{}}
      locale={locale}
      homeVideo={HOME_VIDEO}
      homeLinks={HOME_LINKS}
      homeMetadata={HOME_METADATA}
    />
  )
}
