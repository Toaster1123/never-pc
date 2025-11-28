import { Route, Routes, useLocation } from "react-router-dom";
import { Catalog } from "./pages/catalog";
import { Servise } from "./pages/servise";
import { Footer, Header } from "./components";
import { HomePage } from "./pages/home-page";
import { useEffect } from "react";
import { AuthPage } from "./pages/auth-page";
import { PersonalPage } from "./pages/personal-page";
import { ProductPage } from "./pages/product-page";
import { AboutPage } from "./pages/about-page";
import { PriceListPage } from "./pages/price-list-page";
import { CartPage } from "./pages/cart-page";
import { ProtectedCart } from "./routes";
import { loadInitialDB } from "./db";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  loadInitialDB();
  const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/catalog", element: <Catalog /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/servise", element: <Servise /> },
    { path: "/product/:id", element: <ProductPage /> },
    { path: "/auth", element: <AuthPage /> },
    { path: "/personal-page", element: <PersonalPage /> },
    { path: "/price", element: <PriceListPage /> },
    {
      path: "/cart",
      element: (
        <ProtectedCart>
          <CartPage />
        </ProtectedCart>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-neutral-900">
      <Header />
      <main className="flex-grow">
        <Routes>
          {routes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={<div className="flex-grow">{element}</div>}
            />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
