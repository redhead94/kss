import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

function getSupabase() {
  return createClient(supabaseUrl, supabaseServiceKey);
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const search = url.searchParams.get("search") || "";
  const startDate = url.searchParams.get("startDate") || "";
  const endDate = url.searchParams.get("endDate") || "";
  const sortBy = (url.searchParams.get("sortBy") || "date") as
    | "date"
    | "amount"
    | "name";
  const sortOrder = (url.searchParams.get("sortOrder") || "desc") as
    | "asc"
    | "desc";

  let query = getSupabase().from("donations").select("*", { count: "exact" });

  if (search) {
    query = query.ilike("donor_name", `%${search}%`);
  }
  if (startDate) {
    query = query.gte("date", startDate);
  }
  if (endDate) {
    query = query.lte("date", endDate);
  }

  const column =
    sortBy === "name" ? "donor_name" : sortBy === "amount" ? "amount" : "date";
  query = query.order(column, { ascending: sortOrder === "asc" });

  const { data, error, count } = await query;

  if (error) {
    return NextResponse.json(
      { error: "Failed to load donations" },
      { status: 500 }
    );
  }

  return NextResponse.json({ donations: data ?? [], total: count ?? 0 });
}