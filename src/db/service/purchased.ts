import { getCurrentUser } from "./auth";
import { dbGetAll, dbSet, dbDelete } from "../database";
import { CartItem, Purchase } from "../database";

export async function addPurchase(
  items: CartItem[]
): Promise<{ success: boolean; error?: string }> {
  const user = await getCurrentUser();
  if (!user) return { success: false, error: "NOT_AUTH" };

  const purchase: Purchase = {
    id:
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : String(Date.now()),
    items,
    date: new Date().toISOString(),
  };

  await dbSet("purchases", purchase);

  const cartAll = await dbGetAll("cart");
  const userItems = cartAll.filter((c) => c.userEmail === user.email);

  for (const it of userItems) {
    if (items.some((p) => p.id === it.id)) {
      await dbDelete("cart", it.id);
    }
  }

  return { success: true };
}

export async function getPurchases(): Promise<Purchase[]> {
  const user = await getCurrentUser();
  if (!user) return [];

  const all = await dbGetAll("purchases");
  return all.filter((p) =>
    p.items.some((item) => item.userEmail === user.email)
  );
}
