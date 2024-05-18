import ReactDOM from "react-dom/client";
import App from "./App";
import {
  HashRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import UserScreen from "./components/userScreen/UserScreen";

import { GlobalStyle } from "./GlobalStyle";
import Login from "./components/login/Login";
import { UserProvider } from "./components/userContext/UserContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/user", element: <UserScreen /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <UserProvider>
    <HashRouter basename="/b2bit">
      <RouterProvider router={router} />
    </HashRouter>
    <GlobalStyle />
  </UserProvider>
);
