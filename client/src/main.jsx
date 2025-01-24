/* eslint-disable no-unused-vars */
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import App from "./App";
import Services from "./components/Services";
import PaymentForm from "./components/PaymentForm";
import MockPayment from "./components/MockPayment";
import Cart from "./components/Cart";
import store from "./store"; // Your Redux store
import About from "./components/About";
import Contact from "./components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Services /> },
      { path: "/cart", element: <Cart /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/payment-form", element: <PaymentForm /> },
      { path: "/payment", element: <MockPayment /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
