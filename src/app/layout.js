import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sabbella Laharika | Software Engineer",
  description: "Personal portfolio of Sabbella Laharika, a Software Developer specializing in Distributed Systems, Event-Driven Architecture, and Scalable Backend Solutions.",
  keywords: ["Sabbella Laharika", "Software Developer", "Backend Engineer", "Distributed Systems", "Event Sourcing", "CQRS", "Node.js", "Java", "Next.js"],
  authors: [{ name: "Sabbella Laharika" }],
  icons: {
    icon: "/Photo2.jpg",
    apple: "/Photo2.jpg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <ScrollProgress />
          {children}
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
