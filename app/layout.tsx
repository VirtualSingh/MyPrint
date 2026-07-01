import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MyPrint — Print marketplace for Delhi NCR',
  description:
    'Get anything printed, without the back-and-forth. Upload your file, get instant pricing from verified local printers, and track your order until delivered.',
  keywords:
    'print shop Delhi, visiting cards printing Delhi, flex banner printing NCR, online printing marketplace India',
  openGraph: {
    title: 'MyPrint — Print marketplace for Delhi NCR',
    description: 'Get anything printed, without the back-and-forth.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
