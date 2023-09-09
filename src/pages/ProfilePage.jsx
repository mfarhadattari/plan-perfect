import UserCard from "../components/UserCard";

const user = {
  email: "mfarhad.dev@gmail.com",
  name: "Mohammad Farhad",
  avatar: "https://avatars.githubusercontent.com/u/121655696?v=4",
  isLoading: false,
  isError: false,
  error: "",
};

const ProfilePage = () => {
  return (
    <div className="h-screen px-5 md:px-10 pt-10">
      <div>
        <h1 className="font-semibold text-3xl uppercase">Profile</h1>
      </div>
      <div className="mt-10 flex justify-center items-center">
        <UserCard user={user} />
      </div>
    </div>
  );
};

export default ProfilePage;
