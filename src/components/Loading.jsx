import { Dialog, DialogBody, Spinner } from "@material-tailwind/react";

const Loading = ({ isOpenLoading }) => {
  return (
    <Dialog
      open={isOpenLoading}
      size="xs"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <DialogBody className="flex justify-center ">
        <Spinner className="h-6 w-6" />
      </DialogBody>
    </Dialog>
  );
};

export default Loading;
