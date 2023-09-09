import {
  ArchiveBoxIcon,
  Cog6ToothIcon,
  PowerIcon,
  SquaresPlusIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import NavigationLink from "../NavigationLink";

export function Sidebar() {
  return (
    <div className="min-h-screen sticky top-0 border-r-2 border-secondary/20 flex flex-col justify-between items-center">
      <div className="flex flex-col items-center gap-5 h-full py-5">
        <img src="/icon.png" alt="logo" height={40} width={40} />
        <NavigationLink to="/">
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
        <IconButton>
          <PowerIcon className="h-7 w-7 group-hover:text-white " />
        </IconButton>
      </div>
    </div>
  );
}
