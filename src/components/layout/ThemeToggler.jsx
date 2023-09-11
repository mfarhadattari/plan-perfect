import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/features/theme/themeSlice";

const ThemeToggler = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.themeSlice);

  const handelToggle = () => {
    dispatch(setTheme(theme !== "light" ? "light" : "dark"));
  };
  return (
    <IconButton
      title="Toggle theme"
      variant="text"
      className="text-deep-orange-800"
      onClick={handelToggle}
    >
      {theme === "dark" ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </IconButton>
  );
};

export default ThemeToggler;
