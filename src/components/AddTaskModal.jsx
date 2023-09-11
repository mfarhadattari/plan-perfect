import {
  Alert,
  Button,
  Card,
  Dialog,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useAddTaskMutation } from "../redux/features/tasks/taskApi";
import Loading from "./Loading";

const AddTaskModal = ({ open, setOpen }) => {
  const handleOpen = () => setOpen((cur) => !cur);

  const [isOpenLoading, setIsOpenLoading] = useState(false);

  const [addTask, { data: addTaskRes }] = useAddTaskMutation();
  const { email, name } = useSelector((state) => state.userSlice);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  // add task handler
  const onSubmit = (data) => {
    setIsOpenLoading(true);
    const task = {
      ...data,
      userEmail: email,
      userName: name,
      status: "pending",
    };
    addTask(task);
  };

  // notification handler
  useEffect(() => {
    if (addTaskRes && addTaskRes?.insertedId) {
      setOpen(false);
      reset();
      toast.success("Task added successfully!");
    }
    if (addTaskRes) {
      setIsOpenLoading(false);
    }
  }, [addTaskRes, reset, setOpen]);

  return (
    <>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="p-5">
          <Typography
            variant="h4"
            color="blue-gray"
            className="text-center uppercase"
          >
            Add Task
          </Typography>
          <form className="mt-8 mb-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 flex flex-col gap-6">
              <Input
                required
                type="text"
                size="lg"
                label="Title"
                name="title"
                {...register("title")}
              />
              <Textarea
                required
                size="lg"
                label="Description"
                name="description"
                {...register("description")}
              />
              <Input
                required
                type="date"
                size="lg"
                label="Date"
                name="date"
                {...register("date")}
              />
              <Controller
                name="priority"
                control={control}
                rules={{ required: "Please select priority" }}
                render={({ field }) => (
                  <Select label="Priority" required={true} {...field}>
                    <Option value="high">High</Option>
                    <Option value="medium">Medium</Option>
                    <Option value="low">Low</Option>
                  </Select>
                )}
              />
              {errors?.priority && (
                <Alert color="red">{errors?.priority.message}</Alert>
              )}
            </div>

            <div className="flex gap-2 mt-3 justify-end">
              <Button color="red" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button color="green" type="submit">
                Save
              </Button>
            </div>
          </form>
        </Card>
      </Dialog>
      <Loading isOpenLoading={isOpenLoading} />
    </>
  );
};
export default AddTaskModal;
