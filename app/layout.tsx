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
          card: 'bg-slate-900 rounded-md mb-0',
          headerTitle:
            'text-center text-primary-foreground dark:text-secondary-foreground',
          headerSubtitle: 'text-center text-secondary dark:text-primary',
          socialButtonsBlockButton:
            'bg-secondary dark:bg-primary hover:bg-secondary-foreground dark:hover:bg-primary-foreground',
          footerActionText: 'text-secondary dark:text-primary',
          footerActionLink:
            'text-primary-foreground hover:text-secondary-foreground dark:secondary-foreground dark:hover:text-primary-foreground',
          dividerText: 'text-secondary dark:text-primary',
          dividerLine: 'bg-secondary dark:bg-primary',
          formFieldLabel: 'text-secondary dark:text-primary',
          formFieldHintText: 'hidden',
          formButtonPrimary:
            'text-primary bg-secondary hover:bg-secondary-foreground dark:bg-primary dark:text-secondary dark:hover:bg-primary-foreground',
          formFieldInfoText: 'text-secondary dark:text-primary',
          formFieldSuccessText: 'text-secondary dark:text-primary',
          formFieldRow: 'flex-row-reverse',
          identityPreview: ' bg-secondary dark:bg-primary ',
          identityPreviewText: 'text-primary dark:text-secondary',
          identityPreviewEditButtonIcon: 'text-primary dark:text-secondary',
          formHeaderTitle: 'text-secondary dark:text-primary',
          formHeaderSubtitle: 'text-secondary dark:text-primary',
          otpCodeFieldInput:
            'border-secondary focus:border-secondary-foreground dark:border-primary focus:border-primary-foreground text-secondary dark:text-primary',
          alertText__danger: 'text-destructive',
          formFieldAction__password:
            'text-secondary hover:text-secondary-foreground dark:text-primary dark:hover:text-primary-foreground',
          formFieldInputShowPasswordIcon: 'text-primary dark:text-secondary',
          formFieldErrorText: 'text-destructive',
          alternativeMethodsBlockButton:
            'bg-secondary-foreground text-secondary hover:bg-secondary-foreground hover:opacity-80 dark:bg-[#4d4d4d] dark:text-primary hover:bg-[#4d4d4d] hover:opacity-80',
          alternativeMethodsBlockButtonArrow:
            'text-primary dark:text-secondary',
          headerBackLink:
            'text-primary-foreground hover:text-secondary dark:text-secondary-foreground dark:hover:text-primary border-secondary',
          headerBackIcon:
            'text-primary-foreground hover:text-secondary dark:text-secondary-foreground dark:hover:text-primary',
          userPreviewMainIdentifier: 'text-secondary dark:text-primary',
          userPreviewSecondaryIdentifier: 'text-secondary dark:text-primary',
          userButtonPopoverActionButton:
            'bg-secondary hover:bg-secondary-foreground dark:bg-primary dark:hover:bg-primary-foreground',
          userButtonPopoverActionButtonText: 'text-primary dark:text-secondary',
          userButtonPopoverActionButtonIcon: 'text-primary dark:text-secondary',
          userButtonPopoverFooter: 'text-primary dark:text-secondary',
          formResendCodeLink:
            'text-primary-foreground hover:text-secondary-foreground dark:secondary-foreground dark:hover:text-primary-foreground',
          navbarMobileMenuButton:
            'text-secondary hover:text-secondary-foreground dark:text-primary dark:hover:text-primary-foreground',
          modalCloseButton:
            'text-primary-foreground dark:text-secondary-foreground',
          profileSectionTitleText:
            'text-primary-foreground dark:text-secondary-foreground',
          accordionTriggerButton:
            'bg-secondary hover:bg-secondary-foreground dark:bg-primary dark:hover:bg-primary-foreground',
          badge: 'text-primary dark:text-secondary',
          profileSectionPrimaryButton:
            'bg-secondary-foreground hover:bg-secondary-foreground hover:opacity-80 dark:bg-primary-foreground dark:hover:bg-primary-foreground dark:hover:opacity-80 text-primary-foreground dark:text-secondary-foreground',
          navbarButton:
            'bg-secondary-foreground hover:bg-secondary-foreground hover:opacity-80 dark:bg-primary-foreground dark:hover:bg-primary-foreground dark:hover:opacity-80 text-primary-foreground dark:text-secondary-foreground mb-3',
          navbar: 'bg-primary dark:bg-secondary',
          '3vf5mz': 'text-secondary',
          breadcrumbsItem:
            'text-primary-foreground hover:text-secondary dark:text-secondary-foreground dark:hover:text-primary border-secondary',
          breadcrumbsItem__currentPage:
            'hover:text-primary-foreground dark:hover:text-secondary-foreground',
          breadcrumbsItemDivider:
            'text-primary-foreground dark:text-secondary-foreground',
          formButtonReset:
            'bg-secondary-foreground text-primary-foreground hover:bg-secondary hover:text-secondary-foreground dark:bg-primary-foreground dark:text-secondary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground',
          avatarImageActionsUpload:
            'text-primary-foreground hover:text-secondary dark:text-secondary-foreground dark:hover:text-primary border-secondary',
          fileDropAreaBox: 'bg-secondary dark:bg-primary',
          fileDropAreaIcon: 'text-primary dark:text-secondary',
          fileDropAreaHint:
            'text-secondary-foreground dark:text-primary-foreground',
          fileDropAreaButtonPrimary:
            'bg-secondary text-primary hover:bg-secondary-foreground dark:text-secondary dark:bg-primary dark:hover:bg-primary-foreground',
          fileDropAreaFooterHint:
            'text-primary-foreground dark:text-secondary-foreground',
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
