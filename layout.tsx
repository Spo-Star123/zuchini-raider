import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Privacy Center - Meta",
  description:
    "Make the privacy choices that are right for you. Learn how to manage and control your privacy on Facebook, Instagram, Messenger, and other Meta Products.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add Associate Sans font with proper weights */}
        <link
          href="https://fonts.googleapis.com/css2?family=Associate+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}

/* Ensure Associate Sans is loaded and applied to headings */
h1, h2, h3, h4, h5, h6 {
  font-family: "Associate Sans", sans-serif;
  font-weight: 400;
}
        `}</style>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
