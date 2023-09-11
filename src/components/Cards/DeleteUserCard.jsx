import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const DeleteUserCard = () => {
  return (
    <Card className="mt-6 w-[250px] md:w-80">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Delete User
        </Typography>
        <Typography>
          If you delete account your data will be permanently deleted from our
          servers. This data cannot be recovered once deleted.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Delete User</Button>
      </CardFooter>
    </Card>
  );
};

export default DeleteUserCard;
