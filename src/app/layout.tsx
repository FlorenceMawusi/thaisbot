import type { Metadata } from "next";
import ThemeProvider from '@/components/ThemeProvider';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import './globals.css';

export const metadata: Metadata = {
  title: "Thais Gibson Psychology Assistant",
  description: "A supportive AI assistant for exploring attachment, trauma, and relationship psychology",
  icons: {
    icon: '/thais-icon-top.png',
    shortcut: '/thais-icon-top.png',
    apple: '/thais-icon-top.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}