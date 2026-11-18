import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "demo-story | Harry Potter Series 1",
  description:
    "A 10-episode Harry Potter Series 1 daily-release story built with Next.js and multi-agent GitHub workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <header className="border-b border-slate-800 bg-slate-900/70 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-amber-400 hover:text-amber-300"
            >
              ⚡ demo-story
            </Link>
            <span className="text-xs font-medium text-slate-400">
              Harry Potter · Series 1 (10 Episodes)
            </span>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
