import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";

const ResetPasswordCard = () => {
  const { email } = useSelector((state) => state.userSlice);

  return (
    <Card className="mt-6 w-[250px] md:w-80">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Reset Password
        </Typography>
        <Typography>
          You will receive a password reset email on {email}
        </Typography>
      </CardBody>
      <CardFooter className="pt-5">
        <Button>Reset Password</Button>
      </CardFooter>
    </Card>
  );
};

export default ResetPasswordCard;
