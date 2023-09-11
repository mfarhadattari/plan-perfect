import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const ChangePasswordCard = () => {
  return (
    <Card className="mt-6 w-[250px] md:w-80">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Change Password
        </Typography>
        <Typography>You can change your password from here.</Typography>
      </CardBody>
      <CardFooter className="pt-5">
        <Button>Change Password</Button>
      </CardFooter>
    </Card>
  );
};

export default ChangePasswordCard;
