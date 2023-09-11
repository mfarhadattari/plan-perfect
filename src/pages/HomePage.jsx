import { LockClosedIcon, Square3Stack3DIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import banner from "./../assets/banner.avif";

const HomePage = () => {
  return (
    <div className="h-screen">
      <div className="grid grid-col-1 lg:grid-cols-2 justify-between items-center">
        <div className="flex justify-center items-center ms-10 mt-10 md:mt-20 lg:mt-0">
          <div className="p-5 h-fit">
            <p className="text-blue-gray-600 text-xs w-fit rounded-md font-bold uppercase">
              TODO Management ---------
            </p>
            <h1 className="text-2xl lg:text-5xl font-semibold leading-normal mt-2">
              Unlock Your
              <br />
              Productivity
              <br />
              Potential With
              <br />
              Plan Perfect...
            </h1>
            <div className="flex gap-5 mt-4">
              <Link to="/login">
                <Button
                  type="button"
                  className="bg-blue-gray-600 flex gap-2 items-center text-white"
                >
                  <LockClosedIcon className="h-4 w-4" /> Login
                </Button>
              </Link>
              <Link to="/task">
                <Button
                  type="button"
                  className="bg-deep-orange-600 flex gap-2 items-center text-white"
                >
                  <Square3Stack3DIcon className="h-4 w-4" /> My Task
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <img src={banner} alt="Home Banner" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
