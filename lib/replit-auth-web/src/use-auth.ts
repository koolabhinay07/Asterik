import { useState, useEffect, useCallback } from "react";

export interface AuthUser {
  id: string;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  profileImageUrl?: string | null;
}

interface AuthState {
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  loginWithGoogle: () => void;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  registerWithEmail: (
    email: string,
    password: string,
    firstName?: string,
    lastName?: string,
  ) => Promise<void>;
  logout: () => void;
  refresh: () => Promise<void>;
}

const API_BASE = "/api";

async function fetchCurrentUser(): Promise<AuthUser | null> {
  const res = await fetch(`${API_BASE}/auth/user`, { credentials: "include" });
  if (!res.ok) return null;
  const data = (await res.json()) as { user: AuthUser | null };
  return data.user ?? null;
}

export function useAuth(): AuthState {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const u = await fetchCurrentUser();
      setUser(u);
    } catch {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    fetchCurrentUser()
      .then((u) => {
        if (!cancelled) {
          setUser(u);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setUser(null);
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const loginWithGoogle = useCallback(() => {
    const base = (import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL?.replace(/\/+$/, "") ?? "";
    window.location.href = `${API_BASE}/login?returnTo=${encodeURIComponent(base || "/")}`;
  }, []);

  const loginWithEmail = useCallback(
    async (email: string, password: string) => {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? "Login failed");
      }
      const data = (await res.json()) as { user: AuthUser };
      setUser(data.user ?? null);
    },
    [],
  );

  const registerWithEmail = useCallback(
    async (
      email: string,
      password: string,
      firstName?: string,
      lastName?: string,
    ) => {
      const res = await fetch(`${API_BASE}/auth/register`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, firstName, lastName }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? "Registration failed");
      }
      const data = (await res.json()) as { user: AuthUser };
      setUser(data.user ?? null);
    },
    [],
  );

  const logout = useCallback(() => {
    window.location.href = `${API_BASE}/logout`;
  }, []);

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    loginWithGoogle,
    loginWithEmail,
    registerWithEmail,
    logout,
    refresh,
  };
}
