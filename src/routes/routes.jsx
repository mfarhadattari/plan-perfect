import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ArchivePage from "../pages/ArchivePage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import SettingPage from "../pages/SettingPage";
import SignUpPage from "../pages/SignUpPage";
import TaskPage from "../pages/TaskPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <TaskPage />,
      },
      {
        path: "/archive",
        element: <ArchivePage />,
      },
      {
        path: "/setting",
        element: <SettingPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
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
