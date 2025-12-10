import type { Metadata } from "next";
import {
  Inter,
  Geist_Mono,
  Fraunces,
  Quicksand,
  Playfair_Display,
  Lato,
  Crimson_Text,
  Source_Sans_3,
  Rye,
  Roboto_Slab,
  Cinzel,
  Montserrat
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroller } from "@/components/smooth-scroller"; // Import this
// Default Fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Sugar Theme Fonts (Pie inspired: Soft, rounded, homey)
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
});

// Tuliptree Theme Fonts (Nature inspired: Elegant, organic)
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Cardinal Theme Fonts (State Bird: Classic, academic, sharp)
const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

// Hoosier Theme Fonts (Rustic, Heartland, Americana)
const rye = Rye({
  variable: "--font-rye",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  display: "swap",
});

// Peony Theme Fonts (State Flower: Delicate, floral, high-contrast)
const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Activism. Indiana. Artistry.",
  description: "A directory of artists and murals shaping social justice in Indiana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${inter.variable} ${geistMono.variable} 
          ${fraunces.variable} ${quicksand.variable} 
          ${playfair.variable} ${lato.variable}
          ${crimsonText.variable} ${sourceSans.variable}
          ${rye.variable} ${robotoSlab.variable}
          ${cinzel.variable} ${montserrat.variable}
          antialiased bg-background text-foreground transition-colors duration-300
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="hoosier"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dark", "sugar", "tuliptree", "cardinal", "hoosier", "peony"]}
        >
          <SmoothScroller />
          <div className="noise-overlay" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}