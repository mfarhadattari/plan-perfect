import SignUpCard from "../components/Cards/SignUpCard";
import SocialLoginCard from "../components/Cards/SocialLoginCard";

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10">
      <SignUpCard />
      <SocialLoginCard />
    </div>
  );
};

export default SignUpPage;
