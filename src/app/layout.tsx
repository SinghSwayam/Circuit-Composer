import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider';

// 1. Import 'Poppins' instead of 'Inter'
import { Poppins, Source_Code_Pro } from 'next/font/google';

// 2. Configure Poppins
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'], // Add the weights you need
  variable: '--font-sans', // Set it as the 'sans' variable
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-mono', // Keep this as the 'mono' variable
});

export const metadata: Metadata = {
  title: 'Circuit Composer',
  description: 'Design and simulate quantum circuits with an AI assistant.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 3. Apply the new 'poppins' variable
    <html lang="en" className={`${poppins.variable} ${sourceCodePro.variable}`} suppressHydrationWarning>
      
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}