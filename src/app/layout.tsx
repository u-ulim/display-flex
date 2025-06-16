import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggle from "./components/themeToggle/ThemeToggle";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-theme="light" className="dark:bg-gray-900">
      <body className="pb-23">
        <ThemeProvider>
          <ThemeToggle />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
