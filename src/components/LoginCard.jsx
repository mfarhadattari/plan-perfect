import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/features/users/userThunks";

const LoginCard = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  // redux state
  const dispatch = useDispatch();
  const { email, isError, isLoading, error } = useSelector(
    (state) => state.userSlice
  );

  // sign in notification handling
  useEffect(() => {
    if (!isLoading && email) {
      toast.success("Login successful!");
      reset();
      navigate("/");
    }
    if (!isLoading && isError && error) {
      toast.error(error);
    }
  }, [isLoading, email, reset, navigate, error, isError]);

  const onSubmit = ({ email, password }) => {
    dispatch(loginUser({ email, password }));
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography
        variant="h4"
        color="blue-gray"
        className="text-center uppercase"
      >
        Sign In
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input
            required
            type="email"
            size="lg"
            label="Email"
            {...register("email")}
          />
          <Input
            type="password"
            size="lg"
            label="Password"
            required
            {...register("password")}
          />
        </div>

        <Button type="submit" className="mt-6" fullWidth>
          Sign In
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Not have any account?{" "}
          <Link to="/sign-up" className="font-medium text-gray-900">
            Sign Up
          </Link>
        </Typography>
      </form>
    </Card>
  );
};

export default LoginCard;
