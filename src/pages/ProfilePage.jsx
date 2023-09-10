import { useSelector } from "react-redux";
import UserCard from "../components/UserCard";

const ProfilePage = () => {
  const { name, email, avatar } = useSelector((state) => state.userSlice);
  return (
    <div className="h-screen px-5 md:px-10 pt-10">
      <div>
        <h1 className="font-semibold text-3xl uppercase">Profile</h1>
      </div>
      <div className="mt-10 lg:mt-16 flex justify-center items-center">
        <UserCard user={{ name, email, avatar }} />
      </div>
    </div>
  );
};

export default ProfilePage;
