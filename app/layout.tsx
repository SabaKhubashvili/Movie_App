import { Container } from './Container'
import { ClientOnly } from './components/ClientOnly'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home',
  description: 'Free movie website',
  Image:'/Image/main/Logo.webp'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
            <Navbar/>
            <div>
              {children}
            </div>
            <Container>
              <Footer/>
            </Container>
        </ClientOnly>
      </body>
    </html>
  )
}
