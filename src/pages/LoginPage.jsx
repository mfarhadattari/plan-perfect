import LoginCard from "../components/LoginCard";
import SocialLoginCard from "../components/SocialLoginCard";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10">
      <LoginCard />
      <SocialLoginCard />
    </div>
  );
};

export default LoginPage;
