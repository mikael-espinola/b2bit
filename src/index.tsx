import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserScreen from "./components/userScreen/UserScreen";

import { GlobalStyle } from "./GlobalStyle";
import Login from "./components/login/Login";
import { UserProvider } from "./components/userContext/UserContext";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/b2bit", element: <Login /> },
        { path: "/b2bit/user", element: <UserScreen /> },
      ],
    },
  ],
  {
    basename: "/b2bit/",
  }
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <UserProvider>
    <RouterProvider router={router} />
    <GlobalStyle />
  </UserProvider>
);
