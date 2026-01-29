import DashboardShell from "@/components/wrapper/DashboardShell";
import StudentDashboard from "./Dashboard";

function page() {
  return (
    <DashboardShell>
      <StudentDashboard />
    </DashboardShell>
  );
}

export default page;
