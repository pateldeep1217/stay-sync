import * as React from "react";
import { Bell, ChevronDown, Menu, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Logo from "./Logo";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <div className="relative isolate flex min-h-svh w-full flex-col bg-white lg:bg-zinc-100 dark:bg-zinc-900 dark:lg:bg-zinc-950">
        <header className="flex items-center px-4">
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
                <span className="inline-grid shrink-0 place-items-center rounded-md bg-white p-1 dark:bg-zinc-900">
                  <Logo className="h-6 w-6" />
                </span>
                <span className="font-medium">StaySync</span>
                <ChevronDown className="h-4 w-4" />
              </Button>

              <Separator orientation="vertical" className="max-lg:hidden h-6" />

              {/* Display Motel Name */}
              <div className="flex items-center gap-3">
                <span className="text-lg font-semibold text-zinc-950 dark:text-white">
                  Motel Inn
                </span>
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
                    className="relative p-2 font-medium"
                  >
                    {item === "Home" && (
                      <span className="absolute inset-x-2 -bottom-2.5 h-0.5 rounded-full bg-zinc-950 dark:bg-white" />
                    )}
                    {item}
                  </Button>
                ))}
              </div>

              <div aria-hidden="true" className="-ml-4 flex-1" />

              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Bell className="h-5 w-5" />
                  <span className="sr-only">Notifications</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Avatar>
                    <AvatarImage alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </div>
            </nav>
          </div>
        </header>

        <main className="flex flex-1 flex-col pb-2 lg:px-2">
          <div className="grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:shadow-sm lg:ring-1 lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
            <div className="mx-auto max-w-6xl">{children}</div>
          </div>
        </main>
      </div>
    </>
  );
}
