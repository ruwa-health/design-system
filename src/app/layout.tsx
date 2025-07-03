import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ruwa - Design System",
  description: "A modern design system built with custom tokens, Tailwind CSS, and ShadCN UI components.",
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