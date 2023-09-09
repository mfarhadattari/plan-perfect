import SignUpCard from "../components/SignUpCard";
import SocialLoginCard from "../components/SocialLoginCard";

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <SignUpCard />
      <SocialLoginCard />
    </div>
  );
};

export default SignUpPage;
