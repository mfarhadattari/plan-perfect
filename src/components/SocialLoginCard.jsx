import { IconButton } from "@material-tailwind/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLoginCard = () => {
  return (
    <div>
      <h1 className="text-center my-2 text-xl font-medium">Continue with</h1>
      <div className="flex justify-center gap-5">
        <IconButton className="rounded-full bg-white text-3xl">
          <FcGoogle />
        </IconButton>
        <IconButton className="rounded-full text-3xl bg-white text-gray-900">
          <FaGithub />
        </IconButton>
      </div>
    </div>
  );
};

export default SocialLoginCard;
