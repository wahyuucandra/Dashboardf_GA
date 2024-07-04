import '@assets/styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'

import type { Metadata, Viewport } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import Container from '@components/organisms/Container'

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
    default: 'Booking Asset | GA',
    template: '%s | GA',
  },
  description: 'Get Result and Performance HC',
  manifest: '/manifest.json',
  icons: [{ url: '/favicon.ico' }],
}

export default function Layout({ children }: { readonly children: React.ReactNode }) {
  return <Container>{children}</Container>
}
