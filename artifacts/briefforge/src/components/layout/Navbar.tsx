import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Sparkles, Moon, Sun, Menu, X, LogOut, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@workspace/replit-auth-web";
import { AuthModal } from "@/components/auth/AuthModal";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { user, isAuthenticated, isLoading, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    setIsDark(document.documentElement.classList.contains("dark"));

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMq = (e: MediaQueryListEvent) => {
      if (localStorage.getItem("theme")) return;
      const useDark = e.matches;
      setIsDark(useDark);
      document.documentElement.classList.toggle("dark", useDark);
    };
    mq.addEventListener("change", handleMq);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mq.removeEventListener("change", handleMq);
    };
  }, []);

  const toggleDarkMode = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");
  };

  const openSignIn = () => {
    setAuthMode("signin");
    setAuthModalOpen(true);
    setMobileMenuOpen(false);
  };

  const openSignUp = () => {
    setAuthMode("signup");
    setAuthModalOpen(true);
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Generate", href: "#generator" },
    { name: "Pricing", href: "#pricing" },
  ];

  const userInitials = user
    ? (user.firstName?.[0] ?? user.email?.[0] ?? "U").toUpperCase()
    : "U";
  const userName = user?.firstName
    ? `${user.firstName}${user.lastName ? ` ${user.lastName}` : ""}`
    : (user?.email?.split("@")[0] ?? "");

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-40 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-border shadow-sm py-3"
            : "bg-transparent py-5",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
              <Sparkles size={20} />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-foreground">
              BriefForge
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleDarkMode}
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-full transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {isLoading ? (
                <div className="h-8 w-20 animate-pulse rounded-lg bg-accent" />
              ) : isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-foreground hover:bg-accent transition-colors"
                  >
                    {user?.profileImageUrl ? (
                      <img
                        src={user.profileImageUrl}
                        alt={userName}
                        className="h-7 w-7 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        {userInitials}
                      </div>
                    )}
                    <span className="max-w-[120px] truncate">{userName}</span>
                    <ChevronDown size={14} className="text-muted-foreground" />
                  </button>

                  <AnimatePresence>
                    {userMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        className="absolute right-0 mt-1 w-48 rounded-xl border border-border bg-background shadow-lg overflow-hidden"
                        onMouseLeave={() => setUserMenuOpen(false)}
                      >
                        <div className="border-b border-border px-4 py-3">
                          <p className="text-xs text-muted-foreground">Signed in as</p>
                          <p className="truncate text-sm font-medium text-foreground">
                            {user?.email ?? userName}
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            setUserMenuOpen(false);
                            logout();
                          }}
                          className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                        >
                          <LogOut size={14} />
                          Sign out
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" onClick={openSignIn}>
                    Sign in
                  </Button>
                  <Button size="sm" onClick={openSignUp}>
                    Get Started
                  </Button>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-muted-foreground"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-b border-border overflow-hidden"
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground py-2 border-b border-border/50"
                  >
                    {link.name}
                  </a>
                ))}
                {isAuthenticated ? (
                  <>
                    <p className="text-sm text-muted-foreground">
                      Signed in as {user?.email ?? userName}
                    </p>
                    <Button
                      variant="outline"
                      className="mt-2 w-full"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        logout();
                      }}
                    >
                      <LogOut size={14} className="mr-2" />
                      Sign out
                    </Button>
                  </>
                ) : (
                  <div className="flex flex-col gap-2 mt-2">
                    <Button variant="outline" className="w-full" onClick={openSignIn}>
                      Sign in
                    </Button>
                    <Button className="w-full" onClick={openSignUp}>
                      Get Started
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        defaultMode={authMode}
      />
    </>
  );
}
