import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hamid Diallo | Portfolio',
  description:
    "Portfolio de Mamadou Abdoul Hamid Diallo, developpeur full-stack avec une forte orientation back-end, performance et architecture logicielle.",
  generator: 'MonPortFolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} bg-background text-foreground selection:bg-primary/30 selection:text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="hamid-portfolio-theme">
          {children}
        </ThemeProvider>
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations().then(function(registrations) {
                  for(let registration of registrations) {
                    registration.unregister();
                  }
                });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
