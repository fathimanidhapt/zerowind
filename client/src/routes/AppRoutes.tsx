import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import Contacts from "../pages/Contacts";
import ProductDetail from "../pages/ProductDetail";
import TechnologyDetail from "../pages/TechnologyDetail";
import Features from "../pages/Features";
import News from "../pages/News";
import NotFound from "../pages/NotFound";
import Fit from "../pages/Fit";
import Motion from "../pages/Motion";
import Power from "../pages/Power";
import Brave from "../pages/Brave";
import Vapora from "../pages/Vapora";

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />

        <Route
          path="/products"
          element={
            <PageWrapper>
              <ProductsPage />
            </PageWrapper>
          }
        />

        <Route
          path="/technology/fit"
          element={
            <PageWrapper>
              <Fit />
            </PageWrapper>
          }
        />
        <Route
          path="/technology/motion"
          element={
            <PageWrapper>
              <Motion />
            </PageWrapper>
          }
        />
        <Route
          path="/technology/power"
          element={
            <PageWrapper>
              <Power />
            </PageWrapper>
          }
        />
        <Route
          path="/technology/brave"
          element={
            <PageWrapper>
              <Brave />
            </PageWrapper>
          }
        />
        <Route
          path="/technology/vapora"
          element={
            <PageWrapper>
              <Vapora />
            </PageWrapper>
          }
        />

        <Route
          path="/technology/:id"
          element={
            <PageWrapper>
              <TechnologyDetail />
            </PageWrapper>
          }
        />

        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Contacts />
            </PageWrapper>
          }
        />
        <Route
          path="/contacts"
          element={
            <PageWrapper>
              <Contacts />
            </PageWrapper>
          }
        />        <Route
          path="/product/:id"
          element={
            <PageWrapper>
              <ProductDetail />
            </PageWrapper>
          }
        />

        <Route
          path="/features"
          element={
            <PageWrapper>
              <Features />
            </PageWrapper>
          }
        />

        <Route
          path="/news"
          element={
            <PageWrapper>
              <News />
            </PageWrapper>
          }
        />

        <Route
          path="*"
          element={
            <PageWrapper>
              <NotFound />
            </PageWrapper>
          }
        />

      </Routes>
    </AnimatePresence>
  );
}
