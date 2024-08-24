
import "./globals.css";
import { Inter } from 'next/font/google'
 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  style: 'normal',
  
})

export const metadata = {
  title: "Onwave",
  description: "APP para a gestão do seu comercio",
};

export default function RootLayout ({ children }) {

  return (
    <html lang="pt-br" >
      <body className={inter.className}>{children}</body>
    </html>
  )
}