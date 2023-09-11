import { IconButton } from "@material-tailwind/react";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginWithSocial } from "../../redux/features/users/userThunks";
import Loading from "../Loading";

const SocialLoginCard = () => {
  const navigate = useNavigate();
  const redirectFrom = useLocation()?.state?.from?.pathname || "/";

  const [isOpenLoading, setIsOpenLoading] = useState(false);

  // redux state
  const dispatch = useDispatch();
  const { email, isError, isLoading, error } = useSelector(
    (state) => state.userSlice
  );

  // sign in notification handling
  useEffect(() => {
    if (!isLoading && email) {
      setIsOpenLoading(false);
      toast.success("Login successful!");
      navigate(redirectFrom);
    }
    if (!isLoading && isError && error) {
      setIsOpenLoading(false);
      toast.error(error);
    }
  }, [isLoading, email, navigate, error, isError, redirectFrom]);

  // sign in with google
  const loginInWithGoogle = () => {
    setIsOpenLoading(true);
    const provider = new GoogleAuthProvider();
    dispatch(loginWithSocial(provider));
  };

  // sign in with Github
  const loginInWithGithub = () => {
    setIsOpenLoading(true);
    const provider = new GithubAuthProvider();
    dispatch(loginWithSocial(provider));
  };

  return (
    <div>
      <h1 className="text-center my-2 text-md font-medium text-gray-600">
        Continue with
      </h1>
      <div className="flex justify-center gap-7 mt-5">
        <IconButton
          className="rounded-full bg-white text-5xl"
          onClick={loginInWithGoogle}
        >
          <FcGoogle />
        </IconButton>
        <IconButton
          onClick={loginInWithGithub}
          className="rounded-full text-[45px] bg-white text-gray-900"
        >
          <FaGithub />
        </IconButton>
      </div>
      <Loading isOpenLoading={isOpenLoading} />
    </div>
  );
};

export default SocialLoginCard;
