import type { LucideIcon } from 'lucide-react'

export interface NavigationItem {
	key: string // translation key, e.g. t('nav.codes')
	path: string // URL path, e.g. '/codes'
	icon: LucideIcon // Lucide icon component
	isContentType: boolean // whether backed by content/ directory
}

export const NAVIGATION_CONFIG: NavigationItem[] = []

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) =>
	item.path.slice(1),
)

export type ContentType = (typeof CONTENT_TYPES)[number]

export function isValidContentType(type: string): type is ContentType {
	return CONTENT_TYPES.includes(type as ContentType)
}
