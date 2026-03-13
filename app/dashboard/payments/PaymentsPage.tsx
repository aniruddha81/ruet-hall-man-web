"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
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
import { getApiErrorMessage } from "@/lib/api";
import { getMyTokenHistory } from "@/lib/services/dining.service";
import { getMyLedger } from "@/lib/services/finance.service";
import type { MealPayment, MealToken, Payment, StudentDue } from "@/lib/types";
import {
  AlertTriangle,
  CreditCard,
  Loader2,
  Receipt,
  UtensilsCrossed,
  Wallet,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function PaymentsPage() {
  const [dues, setDues] = useState<StudentDue[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [mealPayments, setMealPayments] = useState<MealPayment[]>([]);
  const [tokenHistory, setTokenHistory] = useState<MealToken[]>([]);
  const [summary, setSummary] = useState({ totalDue: 0, totalPaid: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ledgerRes, historyRes] = await Promise.allSettled([
          getMyLedger(),
          getMyTokenHistory({ limit: 50 }),
        ]);

        if (ledgerRes.status === "fulfilled") {
          setDues(ledgerRes.value.data.dues);
          setPayments(ledgerRes.value.data.payments);
          setMealPayments(ledgerRes.value.data.mealPayments);
          setSummary(ledgerRes.value.data.summary);
        }

        if (historyRes.status === "fulfilled") {
          setTokenHistory(historyRes.value.data.tokens ?? []);
        }
      } catch (err) {
        setError(getApiErrorMessage(err));
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">
          Payments & Finance
        </h2>
        <p className="text-muted-foreground mt-1">
          View your dues, payment history, and meal token transactions
        </p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Summary Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Unpaid Dues</p>
                <p className="text-2xl font-bold text-destructive mt-1">
                  ৳{summary.totalDue}
                </p>
              </div>
              <Wallet className="h-8 w-8 text-destructive/30" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Paid</p>
                <p className="text-2xl font-bold text-chart-2 mt-1">
                  ৳{summary.totalPaid}
                </p>
              </div>
              <CreditCard className="h-8 w-8 text-chart-2/30" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Meal Payments</p>
                <p className="text-2xl font-bold mt-1">{mealPayments.length}</p>
              </div>
              <UtensilsCrossed className="h-8 w-8 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Token History</p>
                <p className="text-2xl font-bold mt-1">{tokenHistory.length}</p>
              </div>
              <Receipt className="h-8 w-8 text-muted-foreground/30" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="dues">
        <TabsList>
          <TabsTrigger value="dues">Dues</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="meal-payments">Meal Payments</TabsTrigger>
          <TabsTrigger value="token-history">Token History</TabsTrigger>
        </TabsList>

        <TabsContent value="dues">
          <Card>
            <CardHeader>
              <CardTitle>My Dues</CardTitle>
            </CardHeader>
            <CardContent>
              {dues.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  No dues found.
                </p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Type</TableHead>
                      <TableHead>Hall</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dues.map((due) => (
                      <TableRow key={due.id}>
                        <TableCell className="font-medium">
                          {due.dueType}
                        </TableCell>
                        <TableCell>{due.hall?.replace(/_/g, " ")}</TableCell>
                        <TableCell className="font-semibold">
                          ৳{due.amount}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              due.dueStatus === "PAID"
                                ? "default"
                                : "destructive"
                            }
                          >
                            {due.dueStatus}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {new Date(due.createdAt).toLocaleDateString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
            </CardHeader>
            <CardContent>
              {payments.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  No payments yet.
                </p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Hall</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payments.map((p) => (
                      <TableRow key={p.id}>
                        <TableCell>{p.hall?.replace(/_/g, " ")}</TableCell>
                        <TableCell className="font-semibold">
                          ৳{p.amount}
                        </TableCell>
                        <TableCell>{p.method}</TableCell>
                        <TableCell className="text-muted-foreground">
                          {new Date(p.createdAt).toLocaleDateString()}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="meal-payments">
          <Card>
            <CardHeader>
              <CardTitle>Meal Payments</CardTitle>
            </CardHeader>
            <CardContent>
              {mealPayments.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  No meal payments yet.
                </p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Amount</TableHead>
                      <TableHead>Qty</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead>Transaction</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Refund</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mealPayments.map((mp) => (
                      <TableRow key={mp.id}>
                        <TableCell className="font-semibold">
                          ৳{mp.amount}
                        </TableCell>
                        <TableCell>{mp.totalQuantity}</TableCell>
                        <TableCell>{mp.paymentMethod}</TableCell>
                        <TableCell className="font-mono text-xs">
                          {mp.transactionId}
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {new Date(mp.paymentDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          {mp.refundAmount ? (
                            <Badge variant="secondary">
                              ৳{mp.refundAmount}
                            </Badge>
                          ) : (
                            "-"
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="token-history">
          <Card>
            <CardHeader>
              <CardTitle>Meal Token History</CardTitle>
            </CardHeader>
            <CardContent>
              {tokenHistory.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  No token history yet.
                </p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Meal Type</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Qty</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tokenHistory.map((token) => (
                      <TableRow key={token.id}>
                        <TableCell className="font-medium">
                          {token.mealType}
                        </TableCell>
                        <TableCell>
                          {new Date(token.mealDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell>{token.quantity}</TableCell>
                        <TableCell className="font-semibold">
                          ৳{token.totalAmount}
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              token.status === "CONSUMED"
                                ? "default"
                                : token.status === "CANCELLED"
                                  ? "destructive"
                                  : "secondary"
                            }
                          >
                            {token.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
