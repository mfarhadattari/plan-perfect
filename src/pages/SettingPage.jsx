import ChangePasswordCard from "../components/Cards/ChangePasswordCard";
import DeleteUserCard from "../components/Cards/DeleteUserCard";

const SettingPage = () => {
  return (
    <div className="h-screen px-5 md:px-10 pt-10">
      <div>
        <h1 className="font-semibold text-3xl uppercase">Setting</h1>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <DeleteUserCard />
        <ChangePasswordCard />
      </div>
    </div>
  );
};

export default SettingPage;
