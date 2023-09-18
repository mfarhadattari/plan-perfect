import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const UserCard = ({ user }) => {
  return (
    <div className="w-full">
      <Card className="w-[250px] h-[300px] md:w-80 md:h-96 mx-auto ">
        <CardHeader floated={false}>
          <img src={user?.avatar} alt={user?.name} className=" w-full" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography
            variant="h4"
            color="blue-gray"
            className="mb-2 text-base md:text-2xl"
          >
            {user?.name}
          </Typography>
          <Typography
            color="gray"
            variant="h5"
            className="font-medium text-sm md:text-lg"
          >
            {user?.email}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserCard;
