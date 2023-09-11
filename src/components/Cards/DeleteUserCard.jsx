import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import DeleteUserModal from "../DeleteUserModal";

const DeleteUserCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <Card className="mt-6 w-[250px] md:w-80">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Delete User
        </Typography>
        <Typography>You can delete you account from here.</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button onClick={() => setOpen(true)}>Delete User</Button>
      </CardFooter>
      <DeleteUserModal open={open} setOpen={setOpen} />
    </Card>
  );
};

export default DeleteUserCard;
