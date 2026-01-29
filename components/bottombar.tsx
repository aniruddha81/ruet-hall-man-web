"use client";

import { CreditCard, FileText, HelpCircle, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomBar() {
  const pathname = usePathname();

  // Hide bottom bar on auth pages
  if (pathname.startsWith("/login") || pathname.startsWith("/signup")) {
    return null;
  }

  const navLinks = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: Home,
      isActive: pathname === "/dashboard",
    },
    {
      label: "Payments",
      href: "/dashboard#payments",
      icon: CreditCard,
      isActive: false,
    },
    {
      label: "Notices",
      href: "/dashboard#notices",
      icon: FileText,
      isActive: false,
    },
    {
      label: "Support",
      href: "/support",
      icon: HelpCircle,
      isActive: pathname === "/support",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-t border-border md:hidden z-50 pb-safe">
      <div className="flex justify-around items-center h-16">
        {navLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
                link.isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon
                className={`h-5 w-5 ${link.isActive ? "stroke-[2.5]" : ""}`}
              />
              <span className="text-xs font-medium">{link.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
