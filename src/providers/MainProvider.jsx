import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { setTheme } from "../redux/features/theme/themeSlice";
import routes from "../routes/routes";

const MainProvider = () => {
  const { theme } = useSelector((state) => state.themeSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    const localTheme = localStorage.getItem("plan-perfect-theme");
    dispatch(setTheme(localTheme));
  }, [dispatch]);

  return (
    <div
      className={`font-fira-code w-full min-h-screen ${
        theme === "dark" ? "bg-[#0B1120] text-white " : " bg-white"
      }`}
    >
      <RouterProvider router={routes} />
      <Toaster />
    </div>
  );
};

export default MainProvider;
