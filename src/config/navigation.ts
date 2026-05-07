import type { LucideIcon } from 'lucide-react'
import {
	BadgeCheck,
	BarChart3,
	BookOpen,
	Palette,
	Skull,
	Ticket,
	Users,
} from 'lucide-react'

export interface NavigationItem {
	key: string // translation key, e.g. t('nav.codes')
	path: string // URL path, e.g. '/codes'
	icon: LucideIcon // Lucide icon component
	isContentType: boolean // whether backed by content/ directory
}

export const NAVIGATION_CONFIG: NavigationItem[] = [
	{ key: 'codes', path: '/codes', icon: Ticket, isContentType: true },
	{ key: 'characters', path: '/characters', icon: Users, isContentType: true },
	{ key: 'infected', path: '/infected', icon: Skull, isContentType: true },
	{ key: 'guide', path: '/guide', icon: BookOpen, isContentType: true },
	{ key: 'emblems', path: '/emblems', icon: BadgeCheck, isContentType: true },
	{ key: 'stats', path: '/stats', icon: BarChart3, isContentType: true },
	{ key: 'cosmetics', path: '/cosmetics', icon: Palette, isContentType: true },
]

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) =>
	item.path.slice(1),
)

export type ContentType = (typeof CONTENT_TYPES)[number]

export function isValidContentType(type: string): type is ContentType {
	return CONTENT_TYPES.includes(type as ContentType)
}
