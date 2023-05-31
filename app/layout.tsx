'use client'

import { Container } from './Container'
import { ClientOnly } from './components/ClientOnly'
import { Footer } from './components/Footer/Footer'
import { LoginModal } from './components/Modals/LoginModal'
import { RegisterModal } from './components/Modals/RegisterModal'
import { Navbar } from './components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <LoginModal/>
          <RegisterModal/>
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
