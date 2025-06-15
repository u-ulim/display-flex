import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggle from "./components/themeToggle/ThemeToggle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-theme="light" className="dark:bg-gray-900">
      <body>
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
