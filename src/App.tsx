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

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-neutral-900">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex-grow">
                <HomePage />
              </div>
            }
          />
          <Route
            path="/catalog"
            element={
              <div className="flex-grow">
                <Catalog />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div className="flex-grow">
                <AboutPage />
              </div>
            }
          />
          <Route
            path="/servise"
            element={
              <div className="flex-grow">
                <Servise />
              </div>
            }
          />
          <Route
            path="/product/:id"
            element={
              <div className="flex-grow">
                <ProductPage />
              </div>
            }
          />
          <Route
            path="/auth"
            element={
              <div className="flex-grow">
                <AuthPage />
              </div>
            }
          />
          <Route
            path="/personal-page"
            element={<div className="flex-grow">{<PersonalPage />}</div>}
          />
          <Route
            path="/price"
            element={<div className="flex-grow">{<PriceListPage />}</div>}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
