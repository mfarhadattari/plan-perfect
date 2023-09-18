import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../redux/features/users/userThunks";
import Loading from "../Loading";

const LoginCard = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isOpenLoading, setIsOpenLoading] = useState(false);

  // redux state
  const dispatch = useDispatch();

  const { isError, isLoading, error, email } = useSelector(
    (state) => state.userSlice
  );

  // sign in notification handling
  useEffect(() => {
    if (!isLoading && email) {
      setIsOpenLoading(false);
      reset();
    }
    if (!isLoading && isError && error) {
      setIsOpenLoading(false);
      toast.error(error);
    }
  }, [isLoading, error, isError, setIsOpenLoading, email, reset]);

  const onSubmit = ({ email, password }) => {
    setIsOpenLoading(true);
    dispatch(loginUser({ email, password }));
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" className="text-center uppercase">
        Sign In
      </Typography>
      <form className="mt-8 mb-2 w-80" onSubmit={handleSubmit(onSubmit)}>
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

        <Button type="submit" className="mt-6 bg-deep-orange-600" fullWidth>
          Sign In
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Not have any account?{" "}
          <Link to="/sign-up" className="font-medium">
            Sign Up
          </Link>
        </Typography>
      </form>
      <Loading isOpenLoading={isOpenLoading} />
    </Card>
  );
};

export default LoginCard;
