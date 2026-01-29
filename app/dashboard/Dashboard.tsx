"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertTriangle,
  BarChart3,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  CreditCard,
  DollarSign,
  FileText,
  Home,
  Megaphone,
  Plane,
  Users,
  Wrench,
} from "lucide-react";
import { useState } from "react";

export default function StudentDashboard() {
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

  const getStatusVariant = (
    status: string,
  ): "default" | "secondary" | "destructive" | "outline" => {
    switch (status) {
      case "paid":
        return "default";
      case "pending":
        return "secondary";
      case "overdue":
        return "destructive";
      default:
        return "outline";
    }
  };

  const getPriorityVariant = (
    priority: string,
  ): "default" | "secondary" | "destructive" | "outline" => {
    switch (priority) {
      case "high":
        return "destructive";
      case "medium":
        return "secondary";
      case "low":
        return "default";
      default:
        return "outline";
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
        return "text-destructive bg-destructive/10";
      case "medium":
        return "text-chart-4 bg-chart-4/10";
      case "low":
        return "text-chart-2 bg-chart-2/10";
      default:
        return "text-muted-foreground bg-muted";
    }
  };

  return (
    <>
      {/* Main Content */}
      <div className="">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground">
            Welcome, {studentData.name}
          </h2>
          <p className="text-muted-foreground mt-2">
            Student ID: {studentData.studentId} | {studentData.hall} | Room{" "}
            {studentData.room}
          </p>
        </div>

        {/* Alert for Overdue Payment */}
        {overdueAmount > 0 && (
          <Alert variant="destructive" className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              You have an overdue payment of{" "}
              <span className="font-bold">
                BDT {overdueAmount.toLocaleString()}
              </span>
              . Please pay as soon as possible to avoid penalties.
            </AlertDescription>
          </Alert>
        )}

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Due</p>
                  <p className="text-3xl font-bold text-foreground mt-2">
                    BDT {totalDue.toLocaleString()}
                  </p>
                </div>
                <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-destructive" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Overdue</p>
                  <p className="text-3xl font-bold text-destructive mt-2">
                    BDT {overdueAmount.toLocaleString()}
                  </p>
                </div>
                <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-destructive" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Monthly Fee</p>
                  <p className="text-3xl font-bold text-primary mt-2">
                    BDT 5,000
                  </p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">
                    Current Status
                  </p>
                  <p className="text-lg font-bold text-foreground mt-2">
                    {studentData.hall}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Room {studentData.room}
                  </p>
                </div>
                <div className="w-12 h-12 bg-chart-2/10 rounded-xl flex items-center justify-center">
                  <Home className="w-6 h-6 text-chart-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment History Table */}
        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
            <p className="text-sm text-muted-foreground">
              Track all your monthly payments and due amounts
            </p>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Month</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Paid Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paymentHistory.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell className="font-medium">
                      {payment.month}
                    </TableCell>
                    <TableCell className="font-semibold">
                      BDT {payment.amount.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {new Date(payment.dueDate).toLocaleDateString("en-GB")}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {payment.paidDate
                        ? new Date(payment.paidDate).toLocaleDateString("en-GB")
                        : "-"}
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(payment.status)}>
                        {payment.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {payment.status !== "paid" ? (
                        <Button
                          variant="link"
                          className="p-0 h-auto text-primary"
                        >
                          Pay Now
                        </Button>
                      ) : (
                        <Button
                          variant="link"
                          className="p-0 h-auto text-muted-foreground"
                          disabled
                        >
                          View Receipt
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Tabs Navigation */}
        <Tabs defaultValue="overview" className="mt-8">
          <Card className="mb-6">
            <CardContent className="p-2">
              <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto gap-1 bg-transparent">
                <TabsTrigger value="overview" className="gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="notices" className="gap-2">
                  <Megaphone className="w-4 h-4" />
                  Notices
                </TabsTrigger>
                <TabsTrigger value="maintenance" className="gap-2">
                  <Wrench className="w-4 h-4" />
                  Maintenance
                </TabsTrigger>
                <TabsTrigger value="complaints" className="gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Complaints
                </TabsTrigger>
                <TabsTrigger value="events" className="gap-2">
                  <Calendar className="w-4 h-4" />
                  Events
                </TabsTrigger>
                <TabsTrigger value="leave" className="gap-2">
                  <Plane className="w-4 h-4" />
                  Leave
                </TabsTrigger>
                <TabsTrigger value="roommate" className="gap-2">
                  <Users className="w-4 h-4" />
                  Roommates
                </TabsTrigger>
                <TabsTrigger value="documents" className="gap-2">
                  <FileText className="w-4 h-4" />
                  Documents
                </TabsTrigger>
              </TabsList>
            </CardContent>
          </Card>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Room Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Room Number</span>
                    <span className="font-semibold">{studentData.room}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Floor</span>
                    <span className="font-semibold">
                      Floor {studentData.floor}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Occupancy Date
                    </span>
                    <span className="font-semibold">
                      {new Date(studentData.occupancyDate).toLocaleDateString(
                        "en-GB",
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Roommates</span>
                    <span className="font-semibold">
                      {studentData.roommatesCount}
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Hall Facilities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {[
                    "Wi-Fi Access",
                    "24/7 Electricity",
                    "Hot Water Supply",
                    "Dining Hall",
                    "Study Room",
                  ].map((facility, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-chart-2 mr-3" />
                      <span className="text-muted-foreground">{facility}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-6">
              <Button className="h-auto p-6 justify-between" size="lg">
                <div className="text-left">
                  <h4 className="text-lg font-bold">Pay Hall Fee</h4>
                  <p className="text-primary-foreground/80 text-sm mt-1">
                    Pay your due amount online securely
                  </p>
                </div>
                <ChevronRight className="w-6 h-6" />
              </Button>

              <Button
                variant="outline"
                className="h-auto p-6 justify-between"
                size="lg"
              >
                <div className="text-left">
                  <h4 className="text-lg font-bold">Request Guest Pass</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Apply for guest entry pass
                  </p>
                </div>
                <ChevronRight className="w-6 h-6" />
              </Button>

              <Button
                variant="outline"
                className="h-auto p-6 justify-between"
                size="lg"
              >
                <div className="text-left">
                  <h4 className="text-lg font-bold">Report Issue</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Submit maintenance request
                  </p>
                </div>
                <ChevronRight className="w-6 h-6" />
              </Button>

              <Button
                variant="outline"
                className="h-auto p-6 justify-between"
                size="lg"
              >
                <div className="text-left">
                  <h4 className="text-lg font-bold">Apply for Leave</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Request leave from hall
                  </p>
                </div>
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </TabsContent>

          {/* Notices Tab */}
          <TabsContent value="notices" className="space-y-4">
            {notices.map((notice) => (
              <Card key={notice.id} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-lg font-bold text-foreground">
                          {notice.title}
                        </h4>
                        <Badge variant={getPriorityVariant(notice.priority)}>
                          {notice.priority}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-2">
                        {notice.description}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(notice.date).toLocaleDateString("en-GB")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Maintenance Tab */}
          <TabsContent value="maintenance">
            <Button className="mb-6">+ New Maintenance Request</Button>
            <div className="space-y-4">
              {maintenanceRequests.map((request) => (
                <Card key={request.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-bold text-foreground">
                        {request.title}
                      </h4>
                      <div className="flex gap-2">
                        <Badge variant={getPriorityVariant(request.priority)}>
                          {request.priority}
                        </Badge>
                        <Badge
                          variant={
                            request.status === "in-progress"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {request.status}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      {request.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Submitted:{" "}
                      {new Date(request.submittedDate).toLocaleDateString(
                        "en-GB",
                      )}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Complaints Tab */}
          <TabsContent value="complaints">
            <Button className="mb-6">+ File New Complaint</Button>
            <div className="space-y-4">
              {complaints.map((complaint) => (
                <Card key={complaint.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-2">
                          {complaint.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {new Date(complaint.date).toLocaleDateString("en-GB")}
                        </p>
                      </div>
                      <Badge
                        variant={
                          complaint.status === "resolved"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {complaint.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-4">
            {events.map((event) => (
              <Card key={event.id}>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-2xl">
                      {event.category === "sports"
                        ? "⚽"
                        : event.category === "academic"
                          ? "🏆"
                          : "🎭"}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-foreground mb-1">
                      {event.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      {event.location}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(event.date).toLocaleDateString("en-GB")}
                    </p>
                  </div>
                  <Button>Register</Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Leave Tab */}
          <TabsContent value="leave">
            <Button className="mb-6">+ Apply for Leave</Button>
            <div className="space-y-4">
              {leaveRequests.map((leave) => (
                <Card key={leave.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-2">
                          {leave.type}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {new Date(leave.fromDate).toLocaleDateString("en-GB")}{" "}
                          - {new Date(leave.toDate).toLocaleDateString("en-GB")}
                        </p>
                      </div>
                      <Badge
                        variant={
                          leave.status === "approved" ? "default" : "secondary"
                        }
                      >
                        {leave.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Submitted:{" "}
                      {new Date(leave.submittedDate).toLocaleDateString(
                        "en-GB",
                      )}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Roommates Tab */}
          <TabsContent value="roommate" className="space-y-4">
            {roommates.map((roommate) => (
              <Card key={roommate.id}>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-16 h-16 bg-linear-to-br from-chart-3 to-chart-5 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-xl">
                      {roommate.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-foreground mb-1">
                      {roommate.name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {roommate.studentId}
                    </p>
                    <div className="mt-3 space-y-1">
                      <p className="text-sm text-muted-foreground">
                        📧 {roommate.email}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        📱 {roommate.phone}
                      </p>
                    </div>
                  </div>
                  <Button>Message</Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-3">
            {documents.map((doc) => (
              <Card key={doc.id}>
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                      <FileText className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{doc.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Downloaded:{" "}
                        {new Date(doc.downloadDate).toLocaleDateString("en-GB")}
                      </p>
                    </div>
                  </div>
                  <Button>Download</Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
