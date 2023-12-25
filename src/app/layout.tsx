import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/footer'
import { Router } from 'react-router-dom' 


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Green Marmot',
  description: 'Hotel Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <html lang="en">

        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>

      </html>
    
  )
}
