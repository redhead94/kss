"use client";
import { useState } from "react";
import { Button, Card } from "./Ui";

export default function DonateForm() {
  const [amount, setAmount] = useState<string>("50");
  const [purpose, setPurpose] = useState<string>("Donation");

  async function submit() {
    // call your /api/checkout to create Stripe session
    const amountCents = Math.round(parseFloat(amount || "0") * 100);
    if (amountCents <= 0) return;
    const r = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amountCents, purpose })
    });
    const { url } = await r.json();
    window.location.href = url;
  }

  return (
    <Card className="p-6">
      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium text-slate-700">Purpose</label>
        <select value={purpose} onChange={e => setPurpose(e.target.value)} className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm">
          <option>Donation</option>
          <option>Dues</option>
          <option>Aliyah</option>
          <option>Yahrzeit</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="mb-1 block text-sm font-medium text-slate-700">Amount (USD)</label>
        <input value={amount} onChange={e => setAmount(e.target.value)} inputMode="decimal" className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm" placeholder="50" />
      </div>

      <Button className="w-full" onClick={submit}>Continue to Payment</Button>
      <p className="mt-2 text-center text-xs text-slate-500">We accept cards, ACH, Apple Pay, and Google Pay.</p>
    </Card>
  );
}
