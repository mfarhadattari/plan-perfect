import LoginCard from "../components/Cards/LoginCard";
import SocialLoginCard from "../components/Cards/SocialLoginCard";

const LoginPage = () => {
  return (
    <div className=" flex flex-col items-center justify-center py-10">
      <LoginCard />
      <SocialLoginCard />
    </div>
  );
};

export default LoginPage;
