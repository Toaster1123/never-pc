import { TProduct } from "@/@types";
import { CartItem, dbDelete, dbGetAll, dbSet, exportDB } from "../database";
import { getCurrentUser } from "./auth";

export async function getCart(): Promise<CartItem[]> {
  const user = await getCurrentUser();
  if (!user) return [];
  const all = await dbGetAll<CartItem>("cart");
  return all.filter((item) => item.userEmail === user.email);
}

export async function addToCart(product: TProduct) {
  const user = await getCurrentUser();
  if (!user) return { error: "NOT_AUTH" };

  const all = await dbGetAll<CartItem>("cart");

  const existing = all.find(
    (item) => item.userEmail === user.email && item.product.id === product.id
  );

  if (existing) {
    await dbSet<CartItem>("cart", {
      ...existing,
      count: existing.count + 1,
    });
  } else {
    await dbSet<CartItem>("cart", {
      id: crypto.randomUUID(),
      userEmail: user.email,
      product,
      count: 1,
    });
  }
  await exportDB();

  return { success: true };
}

export async function removeFromCart(id: string) {
  const user = await getCurrentUser();
  if (!user) return;

  const all = await dbGetAll<CartItem>("cart");
  const item = all.find((i) => i.id === id && i.userEmail === user.email);
  if (!item) return;

  await dbDelete("cart", id);
  await exportDB();
}
