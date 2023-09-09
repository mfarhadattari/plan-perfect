import { IconButton } from "@material-tailwind/react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLoginCard = () => {
  return (
    <div>
      <h1 className="text-center my-2 text-xl font-medium">Continue with</h1>
      <div className="flex gap-5">
        <IconButton className="rounded-full bg-white text-3xl">
          <FcGoogle />
        </IconButton>
        <IconButton className="rounded-full text-3xl bg-white text-gray-900">
          <FaGithub />
        </IconButton>
        <IconButton className="rounded-full bg-white text-blue-600 text-3xl">
          <FaTwitter />
        </IconButton>
        <IconButton className="rounded-full bg-white text-blue-600 text-3xl">
          <FaFacebook />
        </IconButton>
      </div>
    </div>
  );
};

export default SocialLoginCard;
