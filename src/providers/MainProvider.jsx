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
      className={`font-fira-code max-w-full h-full ${
        theme === "dark" ? "bg-black text-white bg-opacity-90" : " bg-white"
      }`}
    >
      <RouterProvider router={routes} />
      <Toaster />
    </div>
  );
};

export default MainProvider;
