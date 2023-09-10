import { Spinner } from "@material-tailwind/react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-[300px] w-full">
      <Spinner className="h-28 w-28 text-gray-900/50" />
    </div>
  );
};

export default Loader;
