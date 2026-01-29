import Navbar from "@/components/navbar";
import {
  Building2,
  Calendar,
  DollarSign,
  MessageSquareWarning,
  Users,
  Wrench,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-green-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900">
      {/* Navbar Component */}
      <Navbar userName="Guest User" userInitials="GU" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to RUET Hall Management
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Rajshahi University of Engineering & Technology - A comprehensive
            digital solution for managing residential halls, student
            allocations, and administrative tasks.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/signup"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-500 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Key Features
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-200 dark:border-gray-700">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Student Management
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Efficiently manage student registrations, room allocations, and
              personal information all in one place.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-200 dark:border-gray-700">
            <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
              <Building2 className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Hall Administration
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Streamline hall operations with digital records, room availability
              tracking, and automated notifications.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-200 dark:border-gray-700">
            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <DollarSign className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Payment Tracking
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Monitor financial transactions, dues, payments, and generate
              detailed reports with ease.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-200 dark:border-gray-700">
            <div className="w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mb-4">
              <Wrench className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Maintenance Requests
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Submit and track maintenance issues efficiently with real-time
              status updates and priority management.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-200 dark:border-gray-700">
            <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
              <MessageSquareWarning className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Complaint Management
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              File and resolve complaints with proper tracking, escalation, and
              resolution documentation.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-200 dark:border-gray-700">
            <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Event Management
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Plan, coordinate, and manage hall events with registration,
              announcements, and attendance tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-linear-to-r from-blue-600 to-green-600 dark:from-blue-900 dark:to-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">
            RUET Hall Management by Numbers
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold">5000+</p>
              <p className="text-blue-100 mt-2">Students Managed</p>
            </div>
            <div>
              <p className="text-4xl font-bold">12</p>
              <p className="text-blue-100 mt-2">Residential Halls</p>
            </div>
            <div>
              <p className="text-4xl font-bold">2500+</p>
              <p className="text-blue-100 mt-2">Rooms Available</p>
            </div>
            <div>
              <p className="text-4xl font-bold">99%</p>
              <p className="text-blue-100 mt-2">System Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="font-bold text-white dark:text-gray-200 mb-4">
                About
              </h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white dark:hover:text-gray-300 transition"
                  >
                    About RUET
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white dark:hover:text-gray-300 transition"
                  >
                    Contact Info
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white dark:hover:text-gray-300 transition"
                  >
                    Facilities
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-white dark:text-gray-200 mb-4">
                Support
              </h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white dark:hover:text-gray-300 transition"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white dark:hover:text-gray-300 transition"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white dark:hover:text-gray-300 transition"
                  >
                    Report Issue
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-white dark:text-gray-200 mb-4">
                Legal
              </h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white dark:hover:text-gray-300 transition"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white dark:hover:text-gray-300 transition"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white dark:hover:text-gray-300 transition"
                  >
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-white dark:text-gray-200 mb-4">
                Connect
              </h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-white dark:hover:text-gray-300 transition"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white dark:hover:text-gray-300 transition"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white dark:hover:text-gray-300 transition"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 dark:border-gray-700 pt-8 text-center">
            <p className="text-sm">
              &copy; 2024 RUET Hall Management System. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
