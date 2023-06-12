import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.jsx";
import "./index.css";
import AuthProvider from "./context/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
const queryClient = new QueryClient();

// axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.baseURL = "https://jive-server.vercel.app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
