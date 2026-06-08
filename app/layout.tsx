import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SmoothScroll } from '@/components/smooth-scroll'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] });
const _geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Invozee - Transforming Ideas Into Digital Solutions',
  description:
    'Premium IT solutions and software development services. Custom web development, mobile apps, AI solutions, and enterprise software.',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // suppressHydrationWarning prevents browser-extension-injected attributes
    // (e.g. data-new-gr-c-s-check-loaded from Grammarly) from causing mismatch errors
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SmoothScroll>
            {children}
          </SmoothScroll>
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
