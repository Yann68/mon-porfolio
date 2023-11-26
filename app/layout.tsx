import Navbar from '@/components/header/Navbar';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import Sidebar from '@/components/header/Sidebar';
import { ThemeProvider } from '@/components/providers/Theme-providers';
import Footer from '@/components/Footer';
import { ClerkProvider } from '@clerk/nextjs';
import { frFR } from '@clerk/localizations';

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
    <ClerkProvider
      localization={frFR}
      appearance={{
        elements: {
          rootBox: 'w-full sm:w-auto flex justify-center',
          card: 'bg-slate-900 rounded-none sm:rounded-xl',
          headerTitle: 'text-primary',
          headerSubtitle: 'text-primary',
          socialButtonsBlockButton:
            'text-secondary bg-primary hover:bg-primary-foreground',
          dividerText: 'text-primary',
          dividerLine: 'bg-primary',
          formFieldLabel: 'text-primary',
          formFieldHintText: 'hidden',
          formButtonPrimary:
            'bg-primary text-secondary hover:bg-primary-foreground',
          footerActionText: 'text-primary',
        },
      }}>
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
            <main className="overflow-x-hidden h-full w-full">{children}</main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
