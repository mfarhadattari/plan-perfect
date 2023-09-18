import {
  ArchiveBoxIcon,
  ArrowRightOnRectangleIcon,
  HomeIcon,
  LockClosedIcon,
  Square3Stack3DIcon,
  UserCircleIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  logout,
  setError,
  setLoading,
} from "../../redux/features/users/userSlices";
import { auth } from "../../utils/firebase.config";
import NavigationLink from "../NavigationLink";
import ThemeToggler from "./ThemeToggler";

export function Sidebar() {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.userSlice);

  // sign out handler
  const handelLogOut = () => {
    dispatch(setLoading(true));
    signOut(auth)
      .then(() => {
        toast.success("Logout successful!");
        dispatch(logout());
        localStorage.removeItem("plan-perfect-token");
      })
      .catch((error) => {
        toast.error(error);
        setError({ error: error });
      });
  };

  return (
    <div className=" sticky top-0 border-r-2 border-secondary/20 flex flex-col justify-between items-center min-h-screen">
      <div className="flex flex-col items-center gap-5  py-5">
        <Link to="/">
          <img src="/icon.png" alt="logo" height={40} width={40} />
        </Link>
        <NavigationLink to="/">
          <HomeIcon className="h-6 w-6 group-hover:text-white" />
        </NavigationLink>
        <NavigationLink to="/task">
          <Square3Stack3DIcon className="h-6 w-6 group-hover:text-white" />
        </NavigationLink>
        <NavigationLink to="/archive">
          <ArchiveBoxIcon className="h-6 w-6 group-hover:text-white" />
        </NavigationLink>
        <NavigationLink to="/profile">
          <UserCircleIcon className="h-6 w-6 group-hover:text-white " />
        </NavigationLink>
        <NavigationLink to="/setting">
          <WrenchScrewdriverIcon className="h-6 w-6 group-hover:text-white " />
        </NavigationLink>
      </div>
      <div className="mb-10 flex flex-col gap-3 items-center">
        {email ? (
          <IconButton
            variant="text"
            className="text-deep-orange-600"
            onClick={handelLogOut}
            title="Logout"
          >
            <ArrowRightOnRectangleIcon className="h-6 w-6 group-hover:text-white " />
          </IconButton>
        ) : (
          <Link to="/login" title="Login">
            <IconButton className="text-deep-orange-600" variant="text">
              <LockClosedIcon className="h-6 w-6 group-hover:text-white " />
            </IconButton>
          </Link>
        )}
        <div>
          <ThemeToggler />
        </div>
      </div>
    </div>
  );
}
