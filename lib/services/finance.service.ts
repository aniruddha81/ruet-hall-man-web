import api from "@/lib/api";
import type {
  ApiResponse,
  MealPayment,
  Payment,
  StudentDue,
} from "@/lib/types";

// =================== STUDENT FINANCE ===================

export async function getMyDues() {
  const res =
    await api.get<ApiResponse<{ dues: StudentDue[]; totalUnpaid: number }>>(
      "/finance/my-dues",
    );
  return res.data;
}

export async function getMyLedger() {
  const res = await api.get<
    ApiResponse<{
      dues: StudentDue[];
      payments: Payment[];
      mealPayments: MealPayment[];
      summary: { totalDue: number; totalPaid: number };
    }>
  >("/finance/my-ledger");
  return res.data;
}
