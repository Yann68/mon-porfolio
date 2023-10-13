import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import Sidebar from '@/components/Sidebar';
import { ThemeProvider } from '@/components/providers/Theme-providers';

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
    <>
      <html
        lang="en"
        suppressHydrationWarning>
        <head />
        <body
          className={`${font.className}, text-gray-500 bg-[#ECECEC] dark:bg-dark-bg dark:text-slate-400`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>
            <Navbar />
            <Sidebar />
            <main className="pt-20 h-full w-full">{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
