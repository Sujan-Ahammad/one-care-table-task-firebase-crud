import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import './index.css'
import { router } from "./Routers/Routers";

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <div className="max-w-screen-xl	mx-auto">
    <RouterProvider router={router} />
  </div>
  
);