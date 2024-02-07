import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/app/navbar/navbar';
import Footer from '../components/app/footer/footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ISA Groups Ltd',
  description: 'Solutions to your need.',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {

  return (
    <html lang="en">
      <head>
      <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
      </head>
      <body className={inter.className}>
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
