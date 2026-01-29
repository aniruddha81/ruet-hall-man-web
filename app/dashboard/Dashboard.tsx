"use client";

import Navbar from "@/components/navbar";
import { useState } from "react";

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const [studentData] = useState({
    name: "Mohammad Ahmed",
    studentId: "20210001",
    hall: "Rajshahi Hall",
    room: "A-205",
    semester: "Spring 2026",
    floor: 2,
    roommatesCount: 1,
    occupancyDate: "2025-09-01",
  });

  const [paymentHistory] = useState([
    {
      id: 1,
      month: "January 2026",
      amount: 5000,
      dueDate: "2026-01-31",
      status: "overdue",
      paidDate: null,
    },
    {
      id: 2,
      month: "February 2026",
      amount: 5000,
      dueDate: "2026-02-28",
      status: "pending",
      paidDate: null,
    },
    {
      id: 3,
      month: "December 2025",
      amount: 5000,
      dueDate: "2025-12-31",
      status: "paid",
      paidDate: "2025-12-25",
    },
    {
      id: 4,
      month: "November 2025",
      amount: 5000,
      dueDate: "2025-11-30",
      status: "paid",
      paidDate: "2025-11-28",
    },
  ]);

  const totalDue = paymentHistory
    .filter((p) => p.status === "overdue" || p.status === "pending")
    .reduce((sum, p) => sum + p.amount, 0);

  const overdueAmount = paymentHistory
    .filter((p) => p.status === "overdue")
    .reduce((sum, p) => sum + p.amount, 0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300";
      case "pending":
        return "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300";
      case "overdue":
        return "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300";
      default:
        return "bg-gray-100 dark:bg-gray-900 text-gray-800";
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-500";
      case "pending":
        return "bg-yellow-500";
      case "overdue":
        return "bg-red-50 dark:bg-red-900/200";
      default:
        return "bg-gray-500";
    }
  };

  const [notices] = useState([
    {
      id: 1,
      title: "Maintenance Work - Floor 2",
      description: "Water pipeline maintenance on Floor 2 (9 AM - 5 PM)",
      date: "2026-01-29",
      priority: "high",
    },
    {
      id: 2,
      title: "Hall Inspection Schedule",
      description: "Monthly inspection on all floors. Please keep rooms clean.",
      date: "2026-01-28",
      priority: "medium",
    },
    {
      id: 3,
      title: "Guest Policy Update",
      description: "New guest pass guidelines effective from February 2026",
      date: "2026-01-25",
      priority: "medium",
    },
  ]);

  const [maintenanceRequests] = useState([
    {
      id: 1,
      title: "Leaking Tap",
      description: "Tap in bathroom is leaking water",
      status: "in-progress",
      submittedDate: "2026-01-25",
      priority: "high",
    },
    {
      id: 2,
      title: "Broken Light",
      description: "Ceiling light in main room is not working",
      status: "pending",
      submittedDate: "2026-01-27",
      priority: "medium",
    },
  ]);

  const [complaints] = useState([
    {
      id: 1,
      title: "Noise Complaint",
      status: "resolved",
      date: "2026-01-20",
    },
    {
      id: 2,
      title: "Cleaning Issues",
      status: "in-progress",
      date: "2026-01-26",
    },
  ]);

  const [events] = useState([
    {
      id: 1,
      title: "Annual Sports Day",
      date: "2026-02-15",
      location: "Sports Ground",
      category: "sports",
    },
    {
      id: 2,
      title: "Inter-Hall Quiz Competition",
      date: "2026-02-20",
      location: "Auditorium",
      category: "academic",
    },
    {
      id: 3,
      title: "Cultural Program",
      date: "2026-02-28",
      location: "Hall Dining",
      category: "cultural",
    },
  ]);

  const [leaveRequests] = useState([
    {
      id: 1,
      type: "Mid-semester",
      fromDate: "2026-02-01",
      toDate: "2026-02-05",
      status: "approved",
      submittedDate: "2026-01-20",
    },
    {
      id: 2,
      type: "Semester Break",
      fromDate: "2026-06-01",
      toDate: "2026-07-31",
      status: "pending",
      submittedDate: "2026-01-28",
    },
  ]);

  const [documents] = useState([
    {
      id: 1,
      name: "Room Allotment Letter",
      type: "pdf",
      downloadDate: "2025-09-01",
    },
    {
      id: 2,
      name: "Hall Rules & Regulations",
      type: "pdf",
      downloadDate: "2025-09-01",
    },
    {
      id: 3,
      name: "Fee Payment Receipt",
      type: "pdf",
      downloadDate: "2025-12-25",
    },
  ]);

  const [roommates] = useState([
    {
      id: 1,
      name: "Ahmed Hassan",
      studentId: "20210002",
      email: "ahmed@student.ruet.edu.bd",
      phone: "01234567890",
    },
  ]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600 dark:text-red-300 bg-red-50 dark:bg-red-900/20 dark:bg-red-900/20";
      case "medium":
        return "text-yellow-600 dark:text-yellow-300 bg-yellow-50 dark:bg-yellow-900/20";
      case "low":
        return "text-green-600 dark:text-green-300 bg-green-50 dark:bg-green-900/20";
      default:
        return "text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900/20 dark:bg-gray-900/20";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Navbar Component */}
      <Navbar
        userType="student"
        userName={studentData.name}
        userInitials="MA"
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome, {studentData.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Student ID: {studentData.studentId} | {studentData.hall} | Room{" "}
            {studentData.room}
          </p>
        </div>

        {/* Alert for Overdue Payment */}
        {overdueAmount > 0 && (
          <div className="mb-6 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
            <div className="flex">
              <div className="shrink-0">
                <svg
                  className="h-5 w-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-red-800 dark:text-red-300">
                  ⚠️ You have an overdue payment of{" "}
                  <span className="font-bold">
                    BDT {overdueAmount.toLocaleString()}
                  </span>
                  . Please pay as soon as possible to avoid penalties.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {/* Total Due */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Total Due
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                  BDT {totalDue.toLocaleString()}
                </p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Overdue */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Overdue
                </p>
                <p className="text-3xl font-bold text-red-600 mt-2">
                  BDT {overdueAmount.toLocaleString()}
                </p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Monthly Fee */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Monthly Fee
                </p>
                <p className="text-3xl font-bold text-blue-600 mt-2">
                  BDT 5,000
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Hall Info */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Current Status
                </p>
                <p className="text-lg font-bold text-gray-900 dark:text-white mt-2">
                  {studentData.hall}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Room {studentData.room}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 4h4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Payment History Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Payment History
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              Track all your monthly payments and due amounts
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Month
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Due Date
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Paid Date
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.map((payment) => (
                  <tr
                    key={payment.id}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                  >
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white font-medium">
                      {payment.month}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white font-semibold">
                      BDT {payment.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                      {new Date(payment.dueDate).toLocaleDateString("en-GB")}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                      {payment.paidDate
                        ? new Date(payment.paidDate).toLocaleDateString("en-GB")
                        : "-"}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusColor(
                          payment.status,
                        )}`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full mr-2 ${getStatusBadgeColor(
                            payment.status,
                          )}`}
                        ></span>
                        {payment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {payment.status !== "paid" ? (
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-semibold hover:underline">
                          Pay Now
                        </button>
                      ) : (
                        <button className="text-gray-400 text-sm font-semibold cursor-not-allowed">
                          View Receipt
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="mt-8 border-b border-gray-200 dark:border-gray-700 overflow-x-auto bg-white dark:bg-gray-800">
          <div className="flex space-x-8">
            {[
              { id: "overview", label: "Overview", icon: "📊" },
              { id: "notices", label: "Notices", icon: "📢" },
              { id: "maintenance", label: "Maintenance", icon: "🔧" },
              { id: "complaints", label: "Complaints", icon: "⚠️" },
              { id: "events", label: "Events", icon: "📅" },
              { id: "leave", label: "Leave", icon: "✈️" },
              { id: "roommate", label: "Roommates", icon: "👥" },
              { id: "documents", label: "Documents", icon: "📄" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 font-medium whitespace-nowrap border-b-2 transition ${
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-500"
                    : "border-transparent text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    Room Details
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">
                        Room Number
                      </span>
                      <span className="font-semibold">{studentData.room}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">
                        Floor
                      </span>
                      <span className="font-semibold">
                        Floor {studentData.floor}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">
                        Occupancy Date
                      </span>
                      <span className="font-semibold">
                        {new Date(studentData.occupancyDate).toLocaleDateString(
                          "en-GB",
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">
                        Roommates
                      </span>
                      <span className="font-semibold">
                        {studentData.roommatesCount}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    Hall Facilities
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-600 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        Wi-Fi Access
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-600 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        24/7 Electricity
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-600 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        Hot Water Supply
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-600 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        Dining Hall
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-600 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">
                        Study Room
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid md:grid-cols-2 gap-6">
                <button className="bg-blue-600 text-white p-6 rounded-xl hover:bg-blue-700 transition shadow-sm text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold">Pay Hall Fee</h4>
                      <p className="text-blue-100 text-sm mt-1">
                        Pay your due amount online securely
                      </p>
                    </div>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>

                <button className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white p-6 rounded-xl hover:border-gray-300 transition shadow-sm text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold">Request Guest Pass</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        Apply for guest entry pass
                      </p>
                    </div>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>

                <button className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white p-6 rounded-xl hover:border-gray-300 transition shadow-sm text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold">Report Issue</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        Submit maintenance request
                      </p>
                    </div>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>

                <button className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white p-6 rounded-xl hover:border-gray-300 transition shadow-sm text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold">Apply for Leave</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        Request leave from hall
                      </p>
                    </div>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Notices Tab */}
          {activeTab === "notices" && (
            <div className="space-y-4">
              {notices.map((notice) => (
                <div
                  key={notice.id}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition border-l-4 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {notice.title}
                        </h4>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getPriorityColor(
                            notice.priority,
                          )}`}
                        >
                          {notice.priority}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        {notice.description}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(notice.date).toLocaleDateString("en-GB")}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Maintenance Tab */}
          {activeTab === "maintenance" && (
            <div>
              <button className="mb-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
                + New Maintenance Request
              </button>
              <div className="space-y-4">
                {maintenanceRequests.map((request) => (
                  <div
                    key={request.id}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {request.title}
                      </h4>
                      <div className="flex gap-2">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getPriorityColor(
                            request.priority,
                          )}`}
                        >
                          {request.priority}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            request.status === "in-progress"
                              ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                              : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300"
                          }`}
                        >
                          {request.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {request.description}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Submitted:{" "}
                      {new Date(request.submittedDate).toLocaleDateString(
                        "en-GB",
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Complaints Tab */}
          {activeTab === "complaints" && (
            <div>
              <button className="mb-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
                + File New Complaint
              </button>
              <div className="space-y-4">
                {complaints.map((complaint) => (
                  <div
                    key={complaint.id}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {complaint.title}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {new Date(complaint.date).toLocaleDateString("en-GB")}
                        </p>
                      </div>
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          complaint.status === "resolved"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                            : "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                        }`}
                      >
                        {complaint.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Events Tab */}
          {activeTab === "events" && (
            <div className="space-y-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition flex items-start gap-4 border border-gray-200 dark:border-gray-700"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-2xl">
                      {event.category === "sports"
                        ? "⚽"
                        : event.category === "academic"
                          ? "🏆"
                          : "🎭"}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {event.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      {event.location}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(event.date).toLocaleDateString("en-GB")}
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium">
                    Register
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Leave Tab */}
          {activeTab === "leave" && (
            <div>
              <button className="mb-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
                + Apply for Leave
              </button>
              <div className="space-y-4">
                {leaveRequests.map((leave) => (
                  <div
                    key={leave.id}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {leave.type}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {new Date(leave.fromDate).toLocaleDateString("en-GB")}{" "}
                          - {new Date(leave.toDate).toLocaleDateString("en-GB")}
                        </p>
                      </div>
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          leave.status === "approved"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                            : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300"
                        }`}
                      >
                        {leave.status}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Submitted:{" "}
                      {new Date(leave.submittedDate).toLocaleDateString(
                        "en-GB",
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Roommates Tab */}
          {activeTab === "roommate" && (
            <div className="space-y-4">
              {roommates.map((roommate) => (
                <div
                  key={roommate.id}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-linear-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-xl">
                        {roommate.name.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {roommate.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {roommate.studentId}
                      </p>
                      <div className="mt-3 space-y-1">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          📧 {roommate.email}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          📱 {roommate.phone}
                        </p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium">
                      Message
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Documents Tab */}
          {activeTab === "documents" && (
            <div>
              <div className="space-y-3">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition flex items-center justify-between border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-red-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M8.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753 1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H8.5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">
                          {doc.name}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Downloaded:{" "}
                          {new Date(doc.downloadDate).toLocaleDateString(
                            "en-GB",
                          )}
                        </p>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
