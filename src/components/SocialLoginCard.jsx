import { IconButton } from "@material-tailwind/react";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginWithSocial } from "../redux/features/users/userThunks";

const SocialLoginCard = () => {
  const navigate = useNavigate();
  const redirectFrom = useLocation()?.state?.from?.pathname || "/";

  // redux state
  const dispatch = useDispatch();
  const { email, isError, isLoading, error } = useSelector(
    (state) => state.userSlice
  );

  // sign in notification handling
  useEffect(() => {
    if (!isLoading && email) {
      toast.success("Login successful!");
      navigate(redirectFrom);
    }
    if (!isLoading && isError && error) {
      toast.error(error);
    }
  }, [isLoading, email, navigate, error, isError, redirectFrom]);

  // sign in with google
  const loginInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    dispatch(loginWithSocial(provider));
  };

  // sign in with Github
  const loginInWithGithub = () => {
    const provider = new GithubAuthProvider();
    dispatch(loginWithSocial(provider));
  };

  return (
    <div>
      <h1 className="text-center my-2 text-xl font-medium">Continue with</h1>
      <div className="flex justify-center gap-5">
        <IconButton
          className="rounded-full bg-white text-3xl"
          onClick={loginInWithGoogle}
        >
          <FcGoogle />
        </IconButton>
        <IconButton
          onClick={loginInWithGithub}
          className="rounded-full text-3xl bg-white text-gray-900"
        >
          <FaGithub />
        </IconButton>
      </div>
    </div>
  );
};

export default SocialLoginCard;
