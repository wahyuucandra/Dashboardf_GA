import '@assets/styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'

import ContainerProvider from '@components/organisms/Provider'
import type { Metadata, Viewport } from 'next'
import { Source_Sans_3 } from 'next/font/google'

const inter = Source_Sans_3({ subsets: ['latin'] })
export const viewport: Viewport = {
  themeColor: '#ffff',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  userScalable: true,
}

export const metadata: Metadata = {
  title: {
    default: 'Home | BEFAST',
    template: '%s | BEFAST',
  },
  description: 'Get Result and Performance HC',
  manifest: '/manifest.json',
  icons: [{ url: '/favicon.ico' }],
}

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-grey-dark`}>
        <ContainerProvider>{children}</ContainerProvider>
      </body>
    </html>
  )
}
