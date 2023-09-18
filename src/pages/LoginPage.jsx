import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import LoginCard from "../components/Cards/LoginCard";
import SocialLoginCard from "../components/Cards/SocialLoginCard";

const LoginPage = () => {
  const navigate = useNavigate();
  const redirectFrom = useLocation()?.state?.from?.pathname || "/";

  const { email, isLoading } = useSelector((state) => state.userSlice);

  // sign in notification handling
  useEffect(() => {
    if (!isLoading && email) {
      toast.success("Login successful!");
      navigate(redirectFrom);
    }
  }, [isLoading, email, navigate, redirectFrom]);

  return (
    <div className=" flex flex-col items-center justify-center py-10">
      <LoginCard />
      <SocialLoginCard />
    </div>
  );
};

export default LoginPage;
