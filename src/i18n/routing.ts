import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
	// Supported locale list
	locales: ['en', 'pt', 'es', 'id'],

	// Default locale
	defaultLocale: 'en',

	// No prefix for default locale
	localePrefix: 'as-needed',

	// Enable browser language detection
	localeDetection: true,
})

export type Locale = (typeof routing.locales)[number]
