
import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import Navbar from '@/components/SideNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'QR Based Attendence System',
  description: 'At QR Attendance Tracker, we are dedicated to revolutionizing attendance management for our club activities. With our innovative QR-based solution, we offer a seamless, efficient, and hassle-free way to track attendance. Say goodbye to the days of manual, time-consuming methods, and embrace the power of technology to streamline your attendance tracking process.',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
<link rel="icon" href="/logo.png" sizes="any" />
      <body className={inter.className}>
        <Navbar/>
        <Providers>

        {children}
        </Providers>
        
        </body>

    </html>
  );
}
