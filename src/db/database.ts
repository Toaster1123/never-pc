import { TProduct } from "@/@types";

export interface User {
  id: string;
  email: string;
  password: string;
}

export interface CartItem {
  id: string;
  userEmail: string;
  product: TProduct;
  count: number;
}

export interface Purchase {
  id: string;
  items: CartItem[];
  date: string;
}

type StoreMap = {
  users: User;
  cart: CartItem;
  purchases: Purchase;
};

const USERS_KEY = "db_users";
const CART_KEY = "db_cart";
const PURCHASES_KEY = "db_purchases";

function readKey<T>(key: string): T[] {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T[]) : [];
  } catch {
    return [];
  }
}

function writeKey<T>(key: string, arr: T[]) {
  localStorage.setItem(key, JSON.stringify(arr));
}

function storeNameToKey(store: keyof StoreMap): string {
  switch (store) {
    case "users":
      return USERS_KEY;
    case "cart":
      return CART_KEY;
    case "purchases":
      return PURCHASES_KEY;
  }
}

function generateUUID(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto)
    return crypto.randomUUID();
  return Date.now().toString() + "-" + Math.random().toString(36).substring(2);
}

export async function dbGet<K extends keyof StoreMap>(
  storeName: K,
  id: StoreMap[K]["id"]
): Promise<StoreMap[K] | undefined> {
  const key = storeNameToKey(storeName);
  const arr = readKey<StoreMap[K]>(key);
  return arr.find((item) => item.id === id);
}

export async function dbGetAll<K extends keyof StoreMap>(
  storeName: K
): Promise<StoreMap[K][]> {
  return readKey<StoreMap[K]>(storeNameToKey(storeName));
}

export async function dbSet<K extends keyof StoreMap>(
  storeName: K,
  value: StoreMap[K]
): Promise<void> {
  const key = storeNameToKey(storeName);
  const arr = readKey<StoreMap[K]>(key);
  let item = value;

  if (!item.id) {
    item = { ...item, id: generateUUID() } as StoreMap[K];
    arr.push(item);
  } else {
    const idx = arr.findIndex((x) => x.id === item.id);
    if (idx >= 0) arr[idx] = item;
    else arr.push(item);
  }

  writeKey(key, arr);
}

export async function dbDelete<K extends keyof StoreMap>(
  storeName: K,
  id: StoreMap[K]["id"]
): Promise<void> {
  const key = storeNameToKey(storeName);
  const arr = readKey<StoreMap[K]>(key);
  writeKey(
    key,
    arr.filter((item) => item.id !== id)
  );
}
