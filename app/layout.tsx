import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/Logo";
import { Bell, ChevronDown, Menu, Search, LogOut } from "lucide-react";
import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="flex min-h-svh">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-svh w-full flex-col bg-zinc-900 lg:bg-white dark:bg-zinc-950 dark:lg:bg-zinc-950">
            {/* Header */}
            <header className="flex-none flex items-center px-4 border-b border-zinc-800/50 bg-zinc-900 lg:bg-white dark:bg-zinc-950 dark:border-zinc-800">
              <div className="py-2.5 lg:hidden">
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open navigation</span>
                </Button>
              </div>
              <div className="min-w-0 flex-1">
                <nav className="flex flex-1 items-center gap-4 py-2.5">
                  <Button
                    variant="ghost"
                    className="max-lg:hidden relative flex min-w-0 items-center gap-3 rounded-lg p-2"
                  >
                    <span className="inline-grid shrink-0 place-items-center rounded-md bg-zinc-100 p-1 dark:bg-zinc-900">
                      <Logo className="h-6 w-6" />
                    </span>
                    <span className="font-medium">
                      Next.js Supabase Starter
                    </span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                  <Separator
                    orientation="vertical"
                    className="max-lg:hidden h-6"
                  />
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold">Dashboard</span>
                  </div>
                  <div className="max-lg:hidden flex items-center gap-3">
                    {[
                      "Home",
                      "Bookings",
                      "Rooms",
                      "Guests",
                      "Reports",
                      "Settings",
                    ].map((item) => (
                      <Button
                        key={item}
                        variant="ghost"
                        className="relative p-2 font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                      >
                        {item === "Home" && (
                          <span className="absolute inset-x-2 -bottom-2.5 h-0.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
                        )}
                        {item}
                      </Button>
                    ))}
                  </div>
                  <div aria-hidden="true" className="-ml-4 flex-1" />
                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      <Search className="h-5 w-5" />
                      <span className="sr-only">Search</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      <Bell className="h-5 w-5" />
                      <span className="sr-only">Notifications</span>
                    </Button>
                    {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                  </div>
                </nav>
              </div>
            </header>

            {/* Main content */}
            <main className="flex flex-1 flex-col bg-zinc-900 lg:bg-white lg:p-4 dark:bg-zinc-950 dark:lg:bg-zinc-950">
              <div className="flex flex-1 lg:rounded-lg lg:border border-zinc-200 dark:border-zinc-800 bg-zinc-900 dark:bg-zinc-950">
                <div className="flex flex-1 bg-zinc-100 dark:bg-zinc-900">
                  {children}
                </div>
              </div>
            </main>

            {/* Footer */}
            <footer className="flex-none w-full flex items-center justify-center border-t border-zinc-200 dark:border-zinc-800 mx-auto text-center text-xs gap-8 py-8 bg-zinc-900 lg:bg-white dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400">
              <p>
                Powered by{" "}
                <a
                  href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                  target="_blank"
                  className="font-bold hover:text-zinc-900 dark:hover:text-zinc-100"
                  rel="noreferrer"
                >
                  Supabase
                </a>
              </p>
              <ThemeSwitcher />
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
