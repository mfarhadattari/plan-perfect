import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

const UserCard = ({ user }) => {
  return (
    <Card className="w-80">
      <CardHeader floated={false} className="h-72">
        <img src={user?.avatar} alt={user?.name} />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {user?.name}
        </Typography>
        <Typography color="gray" variant="h5" className="font-medium">
          {user?.email}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default UserCard;
