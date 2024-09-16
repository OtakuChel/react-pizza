// import './app.scss'
import React, { Suspense } from "react";
// import Header from "./components/Header";
import "./scss/app.scss";
// import Home from "./pages/Home";
// import Cart from "./pages/Cart";
// import FullPizza from "./pages/FullPizza";
// import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

const Cart = React.lazy(() => import("./pages/Cart"));
const Home = React.lazy(() => import("./pages/Home"));
const FullPizza = React.lazy(() => import("./pages/FullPizza"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={
            <Suspense fallback={<><div className="container">Loading...</div></>}>
              <Home />
            </Suspense>
          } />
          <Route path="cart" element={
            <Suspense fallback={<><div className="container">Loading...</div></>}>
              <Cart />
            </Suspense>
            } />
          <Route path="pizza/:id" element={
            <Suspense fallback={<><div className="container">Loading...</div></>}>
              <FullPizza />
            </Suspense>
            } />
          <Route path="*" element={
            <Suspense fallback={<><div className="container">Loading...</div></>}>
                <NotFound />
            </Suspense>
              } />
        </Route>
    </Routes>
  );
}



export default App;
