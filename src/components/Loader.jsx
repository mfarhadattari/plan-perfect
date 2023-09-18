import { Spinner } from "@material-tailwind/react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center bg-transparent h-[300px] w-full">
      <Spinner className="h-20 w-20 text-deep-orange-600" />
    </div>
  );
};

export default Loader;
