import Navbar from '@/components/header/Navbar';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import Sidebar from '@/components/header/Sidebar';
import { ThemeProvider } from '@/components/providers/Theme-providers';
import Footer from '@/components/Footer';
import { ClerkProvider } from '@clerk/nextjs';

const font = Oswald({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mon Portfolio',
  description: 'Mon portfolio généré par create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        suppressHydrationWarning>
        <body className={`${font.className}, bg-secondary dark:bg-dark-bg`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <Navbar />
            <Sidebar />
            <main className="overflow-x-hidden pt-16 md:pt-20 h-full w-full">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
