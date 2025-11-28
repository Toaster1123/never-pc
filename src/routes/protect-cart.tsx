import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCurrentUser } from "@/db/service";

export const ProtectedCart: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<unknown>(null);

  useEffect(() => {
    async function load() {
      const u = await getCurrentUser();
      setUser(u);
      setLoading(false);
    }
    load();
  }, []);

  if (loading) return null;

  if (!user) {
    return <Navigate to="/auth" replace state={{ from: "/cart" }} />;
  }

  return <>{children}</>;
};
