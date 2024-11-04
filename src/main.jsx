import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"; 
import App from "./App"; 
import RegisterPage from "./Register.jsx";
import LoginPage from "./Login.jsx";
import ProfilePage from "./Profile.jsx";
import TransactionPage from "./Transaction.jsx";
import TopupPage from "./Topup.jsx";
import HomePage from "./Home.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "transaction",
        element: <TransactionPage />,
      },
      {
        path: "topup",
        element: <TopupPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
