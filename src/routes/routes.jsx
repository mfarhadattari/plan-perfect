import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ArchivePage from "../pages/ArchivePage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import SettingPage from "../pages/SettingPage";
import SignUpPage from "../pages/SignUpPage";
import TaskPage from "../pages/TaskPage";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/task",
        element: (
          <PrivateRoute>
            <TaskPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/archive",
        element: (
          <PrivateRoute>
            <ArchivePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/setting",
        element: (
          <PrivateRoute>
            <SettingPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default routes;
