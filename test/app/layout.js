import Header from './components/header'

import './globals.css'

export const metadata = {
  title: 'IKB MUltimedia',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen">
        <Header />
        {children}
      </body>
    </html>
  )
}
