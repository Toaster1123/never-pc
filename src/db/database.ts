import { TProduct } from "@/@types";

export interface User {
  id?: number;
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

export async function loadInitialDB() {
  const exists = localStorage.getItem("DB_LOADED");

  if (exists) return;

  try {
    const response = await fetch("db.json");
    const json = await response.json();

    for (const u of json.users ?? []) {
      await dbSet("users", u);
    }

    for (const c of json.cart ?? []) {
      await dbSet("cart", c);
    }

    for (const p of json.purchases ?? []) {
      await dbSet("purchases", p);
    }

    localStorage.setItem("DB_LOADED", "1");
    await exportDB();
  } catch (err) {
    console.warn("db.json не найден или не удалось прочитать");
  }
}

loadInitialDB();

export async function exportDB(): Promise<void> {
  const users = await dbGetAll<User>("users");
  const cart = await dbGetAll<CartItem>("cart");
  const purchases = await dbGetAll<Purchase>("purchases");

  const snapshot = {
    users,
    cart,
    purchases,
  };

  localStorage.setItem("DB_EXPORT", JSON.stringify(snapshot, null, 2));
}

export function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("appDB", 2);

    request.onupgradeneeded = () => {
      const db = request.result;

      // if (!db.objectStoreNames.contains("export")) {
      //   db.createObjectStore("export", { keyPath: "id" });
      // }

      if (!db.objectStoreNames.contains("users")) {
        db.createObjectStore("users", { keyPath: "id", autoIncrement: true });
      }

      if (!db.objectStoreNames.contains("cart")) {
        db.createObjectStore("cart", { keyPath: "id" });
      }

      if (!db.objectStoreNames.contains("purchases")) {
        db.createObjectStore("purchases", {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// export async function updateDBFile(): Promise<void> {
//   const users = await dbGetAll<User>("users");
//   const cart = await dbGetAll<CartItem>("cart");
//   const purchases = await dbGetAll<Purchase>("purchases");

//   const snapshot = {
//     users,
//     cart,
//     purchases,
//   };

//   const db = await openDB();

//   return new Promise((resolve) => {
//     const tx = db.transaction("export", "readwrite");
//     tx.objectStore("export").put({
//       id: "db-file",
//       content: JSON.stringify(snapshot, null, 2),
//       updatedAt: new Date().toISOString(),
//     });

//     tx.oncomplete = () => resolve();
//   });
// }

export async function dbGet<T>(
  storeName: string,
  key: IDBValidKey
): Promise<T | undefined> {
  const db = await openDB();
  return new Promise((resolve) => {
    const tx = db.transaction(storeName, "readonly");
    const store = tx.objectStore(storeName);
    const req = store.get(key);
    req.onsuccess = () => resolve(req.result as T);
  });
}

export async function dbGetAll<T>(storeName: string): Promise<T[]> {
  const db = await openDB();
  return new Promise((resolve) => {
    const tx = db.transaction(storeName, "readonly");
    const store = tx.objectStore(storeName);
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result as T[]);
  });
}

export async function dbSet<T>(storeName: string, value: T): Promise<void> {
  const db = await openDB();
  return new Promise((resolve) => {
    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);
    store.put(value);
    tx.oncomplete = () => resolve();
  });
}

export async function dbDelete(
  storeName: string,
  key: IDBValidKey
): Promise<void> {
  const db = await openDB();
  return new Promise((resolve) => {
    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);
    store.delete(key);
    tx.oncomplete = () => resolve();
  });
}
