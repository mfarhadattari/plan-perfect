import { LockClosedIcon, Square3Stack3DIcon } from "@heroicons/react/24/solid";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import banner from "./../assets/banner.png";

const HomePage = () => {
  return (
    <div className=" py-10">
      <div className="flex flex-col-reverse md:flex-row  justify-center items-center mt-20 w-full">
        <div className="flex justify-start items-center md:mt-20 lg:mt-0 w-full">
          <div className="p-5">
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
        <div className="w-full">
          <img src={banner} alt="Home Banner" className="max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
