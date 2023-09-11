import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createUser } from "../../redux/features/users/userThunks";
import Loading from "../Loading";

const SignUpCard = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const redirectFrom = useLocation()?.state?.from?.pathname || "/";

  const [isOpenLoading, setIsOpenLoading] = useState(false);

  // redux state
  const dispatch = useDispatch();
  const { email, isError, isLoading, error } = useSelector(
    (state) => state.userSlice
  );

  // sign up notification handling
  useEffect(() => {
    if (!isLoading && email) {
      setIsOpenLoading(false);
      toast.success("Sign up successful!");
      reset();
      navigate(redirectFrom);
    }
    if (!isLoading && isError && error) {
      setIsOpenLoading(false);
      toast.error(error);
    }
  }, [isLoading, email, reset, navigate, error, isError, redirectFrom]);

  const onSubmit = ({ name, email, avatar, password }) => {
    setIsOpenLoading(true);
    dispatch(createUser({ name, email, avatar, password }));
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" className="text-center uppercase">
        Sign Up
      </Typography>
      <form className="mt-8 mb-2 w-80" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 flex flex-col gap-6">
          <Input
            required
            type="text"
            size="lg"
            label="Name"
            {...register("name")}
          />
          <Input
            required
            type="email"
            size="lg"
            label="Email"
            {...register("email")}
          />
          <Input
            required
            type="url"
            size="lg"
            label="Avatar"
            {...register("avatar")}
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
          Sign Up
        </Button>
        <Typography
          color="gray"
          className="mt-4 text-center font-normal text-base"
        >
          Already have an account?{" "}
          <Link to="/login" className="font-medium">
            Sign In
          </Link>
        </Typography>
      </form>
      <Loading isOpenLoading={isOpenLoading} />
    </Card>
  );
};

export default SignUpCard;
