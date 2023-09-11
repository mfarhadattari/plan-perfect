import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { deleteUser } from "firebase/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useClearDataMutation } from "../redux/features/api/baseApi";
import { auth } from "../utils/firebase.config";
import Loading from "./Loading";

const DeleteUserModal = ({ open, setOpen }) => {
  const { email } = useSelector((state) => state.userSlice);
  // handel delete user
  const [clearData] = useClearDataMutation();
  const navigate = useNavigate();

  const [isOpenLoading, setIsOpenLoading] = useState(false);

  const handelDeleteAccount = () => {
    setIsOpenLoading(true);
    clearData(email);
    deleteUser(auth.currentUser)
      .then(() => {
        setIsOpenLoading(false);
        setOpen(false);
        toast.success("Delete account Successful!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <Dialog open={open} size="xs">
      <DialogHeader className="text-lg uppercase">
        Confirm Delete Accounts
      </DialogHeader>
      <DialogBody className="flex justify-center text-red-500 font-medium">
        If you delete account your data will be permanently deleted from our
        servers. This data cannot be recovered once deleted.
      </DialogBody>
      <DialogFooter>
        <Button
          onClick={() => setOpen(false)}
          variant="text"
          color="green"
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="red" onClick={handelDeleteAccount}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
      <Loading isOpenLoading={isOpenLoading} />
    </Dialog>
  );
};

export default DeleteUserModal;
