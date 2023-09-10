import {
  ArchiveBoxIcon,
  Cog6ToothIcon,
  HomeIcon,
  PowerIcon,
  SquaresPlusIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  logout,
  setError,
  setLoading,
} from "../../redux/features/users/userSlices";
import { auth } from "../../utils/firebase.config";
import NavigationLink from "../NavigationLink";

export function Sidebar() {
  const dispatch = useDispatch();

  const handelLogOut = () => {
    dispatch(setLoading(true));
    signOut(auth)
      .then(() => {
        toast.success("Logout successful!");
        dispatch(logout());
      })
      .catch((error) => {
        toast.error(error);
        setError({ error: error });
      });
  };

  return (
    <div className="min-h-screen sticky top-0 border-r-2 border-secondary/20 flex flex-col justify-between items-center">
      <div className="flex flex-col items-center gap-5 h-full py-5">
        <Link to="/">
          <img src="/icon.png" alt="logo" height={40} width={40} />
        </Link>
        <NavigationLink to="/">
          <HomeIcon className="h-7 w-7 group-hover:text-white" />
        </NavigationLink>
        <NavigationLink to="/task">
          <SquaresPlusIcon className="h-7 w-7 group-hover:text-white" />
        </NavigationLink>
        <NavigationLink to="/archive">
          <ArchiveBoxIcon className="h-7 w-7 group-hover:text-white" />
        </NavigationLink>
        <NavigationLink to="/profile">
          <UserCircleIcon className="h-7 w-7 group-hover:text-white " />
        </NavigationLink>
        <NavigationLink to="/setting">
          <Cog6ToothIcon className="h-7 w-7 group-hover:text-white " />
        </NavigationLink>
      </div>
      <div className="mb-10">
        <IconButton onClick={handelLogOut}>
          <PowerIcon className="h-7 w-7 group-hover:text-white " />
        </IconButton>
      </div>
    </div>
  );
}
