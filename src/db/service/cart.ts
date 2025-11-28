import { TProduct } from "@/@types";
import { CartItem, dbDelete, dbGetAll, dbSet } from "../database";
import { getCurrentUser } from "./auth";

export async function getCart(): Promise<CartItem[]> {
  const user = await getCurrentUser();
  if (!user) return [];

  const all = await dbGetAll("cart");
  return all.filter((item) => item.userEmail === user.email);
}

export async function addToCart(product: TProduct) {
  const user = await getCurrentUser();
  if (!user) return { error: "NOT_AUTH" };

  const all = await dbGetAll("cart");

  const existing = all.find(
    (item) => item.userEmail === user.email && item.product.id === product.id
  );

  if (existing) {
    await dbSet("cart", {
      ...existing,
      count: existing.count + 1,
    });
  } else {
    await dbSet("cart", {
      id:
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : String(Date.now()),
      userEmail: user.email,
      product,
      count: 1,
    });
  }

  return { success: true };
}

export async function removeFromCart(id: string) {
  const user = await getCurrentUser();
  if (!user) return;

  const all = await dbGetAll("cart");
  const item = all.find((i) => i.id === id && i.userEmail === user.email);
  if (!item) return;

  await dbDelete("cart", id);
}
