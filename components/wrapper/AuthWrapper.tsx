"use client";

import StudentDashboard from "@/app/dashboard/Dashboard";
import { useEffect, useState } from "react";
import LandingPage from "../home/LandingPage";
import DashboardShell from "./DashboardShell";

export default function AuthWrapper() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // Check for cookie on mount
    const checkAuth = () => {
      // Logic to check accessToken in cookies
      // Note: In a real app, you might want to validate the token or use a more robust method
      // For now, we simply check if the cookie string exists
      const cookies = document.cookie.split(";");
      const hasToken = cookies.some((cookie) =>
        cookie.trim().startsWith("accessToken="),
      );
      setIsAuthenticated(hasToken);
    };

    checkAuth();
  }, []);

  // Show nothing or a loader while checking auth state
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (isAuthenticated) {
    return (
      <DashboardShell>
        <StudentDashboard />
      </DashboardShell>
    );
  }

  return <LandingPage />;
}
