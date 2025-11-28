import { getCurrentUser } from "./auth";
import { dbGetAll, dbSet, exportDB } from "../database";
import { CartItem, Purchase } from "../database";

export async function addPurchase(
  items: CartItem[]
): Promise<{ success: boolean; error?: string }> {
  const user = await getCurrentUser();
  if (!user) return { success: false, error: "NOT_AUTH" };

  const purchase: Purchase = {
    id: crypto.randomUUID(),
    items,
    date: new Date().toISOString(),
  };

  await dbSet<Purchase>("purchases", purchase);

  await exportDB();
  return { success: true };
}

export async function getPurchases(): Promise<Purchase[]> {
  const user = await getCurrentUser();
  if (!user) return [];

  const all = await dbGetAll<Purchase>("purchases");

  return all.filter((p) =>
    p.items.some((item) => item.userEmail === user.email)
  );
}
