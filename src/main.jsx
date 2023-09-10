import { ThemeProvider } from "@material-tailwind/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import store from "./redux/store";
import routes from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <div className="font-fira-code">
          <RouterProvider router={routes} />
          <Toaster />
        </div>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
