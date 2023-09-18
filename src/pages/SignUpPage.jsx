import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import SignUpCard from "../components/Cards/SignUpCard";
import SocialLoginCard from "../components/Cards/SocialLoginCard";

const SignUpPage = () => {
  const { email, isLoading } = useSelector((state) => state.userSlice);
  const navigate = useNavigate();
  const redirectFrom = useLocation()?.state?.from?.pathname || "/";

  // sign up notification handling
  useEffect(() => {
    if (!isLoading && email) {
      toast.success("Sign up successful!");
      navigate(redirectFrom);
    }
  }, [isLoading, email, navigate, redirectFrom]);

  return (
    <div className=" flex flex-col items-center justify-center py-10">
      <SignUpCard />
      <SocialLoginCard />
    </div>
  );
};

export default SignUpPage;
