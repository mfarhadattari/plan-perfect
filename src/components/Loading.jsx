import { Dialog, DialogBody, Spinner } from "@material-tailwind/react";

const Loading = ({ isOpenLoading }) => {
  return (
    <Dialog className="bg-transparent" open={isOpenLoading} size="xs">
      <DialogBody className="flex justify-center bg-transparent">
        <Spinner className="h-6 w-6" />
      </DialogBody>
    </Dialog>
  );
};

export default Loading;
