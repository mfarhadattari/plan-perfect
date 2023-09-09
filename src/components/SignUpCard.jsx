import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUpCard = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography
        variant="h4"
        color="blue-gray"
        className="text-center uppercase"
      >
        Sign Up
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
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

        <Button type="submit" className="mt-6" fullWidth>
          Sign Up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-gray-900">
            Sign In
          </Link>
        </Typography>
      </form>
    </Card>
  );
};

export default SignUpCard;
