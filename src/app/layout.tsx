import { cn } from '@/lib/utils'
import { ptBR } from '@clerk/localizations'
import { ClerkProvider } from '@clerk/nextjs'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="pt-BR" className="h-full">
        <body
          className={cn(
            'relative h-full bg-secondary antialiased',
            poppins.className,
          )}
        >
          <div className="relative flex min-h-screen flex-col">
            <main className="flex flex-1 flex-grow items-center justify-center">
              {children}
            </main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
