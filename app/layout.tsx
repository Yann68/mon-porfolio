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
          card: 'bg-slate-900 rounded-md',
          headerTitle: 'font-bold text-center text-secondary dark:text-primary',
          headerSubtitle: 'text-secondary dark:text-primary',
          socialButtonsBlockButton:
            'text-primary bg-secondary hover:bg-secondary-foreground dark:text-secondary dark:bg-primary dark:hover:bg-primary-foreground',
          dividerText: 'text-secondary dark:text-primary',
          dividerLine: 'bg-secondary dark:bg-primary',
          formFieldLabel: 'text-secondary dark:text-primary',
          formFieldHintText: 'hidden',
          formButtonPrimary:
            'text-primary bg-secondary hover:bg-secondary-foreground dark:bg-primary dark:text-secondary dark:hover:bg-primary-foreground',
          footerActionText: 'text-secondary dark:text-primary',
          formFieldInfoText: 'text-secondary dark:text-primary',
          formFieldSuccessText: 'text-secondary dark:text-primary',
          formFieldRow: 'flex-row-reverse',
          identityPreview:
            'text-primary bg-secondary dark:bg-primary dark:text-secondary',
          identityPreviewEditButtonIcon: 'text-primary dark:text-secondary',
          formHeaderTitle: 'text-secondary dark:text-primary',
          formHeaderSubtitle: 'text-secondary dark:text-primary',
          otpCodeFieldInput:
            'border-secondary focus:border-secondary-foreground dark:border-primary focus:border-primary-foreground text-secondary dark:text-primary',
          formResendCodeLink: 'text-secondary dark:text-primary',
          alertText__danger: 'text-destructive',
          footerActionLink:
            'text-primary-foreground hover:text-secondary dark:text-secondary-foreground dark:hover:text-primary',
          formFieldAction__password:
            'text-secondary hover:text-secondary-foreground dark:text-primary dark:hover:text-primary-foreground',
          alternativeMethodsBlockButton:
            'bg-secondary-foreground text-secondary hover:bg-secondary-foreground hover:opacity-80 dark:bg-[#4d4d4d] dark:text-primary hover:bg-[#4d4d4d] hover:opacity-80',
          headerBackLink:
            'text-primary-foreground hover:text-secondary dark:text-secondary-foreground dark:hover:text-primary border-secondary',
          headerBackIcon:
            'text-primary-foreground hover:text-secondary dark:text-secondary-foreground dark:hover:text-primary',
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
