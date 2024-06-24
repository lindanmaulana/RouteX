import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPages from "./assets/pages/404.jsx";
import store from "./assets/redux/store.js";
import { Provider } from "react-redux";
import HomeVisaServices from "./assets/pages/HomeVisaServices.jsx";
import HomeImmigrationServices from "./assets/pages/HomeImmigrationServices.jsx";
import AboutUsPages from "./assets/pages/AboutUsPages.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeVisaServices />,
    errorElement: <ErrorPages />,
  },
  {
    path: "/immigration-services",
    element: <HomeImmigrationServices />
  },
  {
    path: "/about",
    element: <AboutUsPages />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
