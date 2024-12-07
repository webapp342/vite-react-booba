import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
//import Home  from "./pages/Home.tsx"; 
import  AccountEquityCard  from "./pages/AccountEquityCard.tsx";
import DPRdata from "./pages/DPRdata.tsx";
// import UserProfilePage from "./pages/UserProfilePage.tsx";
//import WheelSpin from "./pages/WheelSpin.tsx";
import LocalStorageViewer from "./pages/localStorage.tsx";
//import  CryptoTable2  from "./pages/wallet.tsx";
import Calculator from "./pages/Calculator.tsx";
import Task from "./pages/Task.tsx";

import SwapComponent from "./pages/SwapComponent.tsx";
import TradingViewWidgetVertical from "./pages/DataComponent.tsx";






const router = createBrowserRouter([
  {
    path: "/vite-react-booba/",
    element: <App />,
    children: [
      {
        path: "/vite-react-booba/calculator",
        element: <Calculator />,
      },
     
      {
        path: "/vite-react-booba/farm",
        element: <AccountEquityCard />,
      },
      {
        path: "/vite-react-booba/task",
        element: <Task />,
      },
      {
        path: "/vite-react-booba/news",
        element: <TradingViewWidgetVertical />,
      },
      {
        path: "/vite-react-booba/user-details",
        element: <DPRdata />,
      },
      {
        path: "/vite-react-booba/user-profile-page",
        element: <SwapComponent />,
      },
      {
        path: "/vite-react-booba/",
        element: <LocalStorageViewer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
