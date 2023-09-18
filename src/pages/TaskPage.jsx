import { useState } from "react";
import { useSelector } from "react-redux";
import AddTaskModal from "../components/AddTaskModal";
import TaskCard from "../components/Cards/TaskCard";
import Loader from "../components/Loader";
import { useGetTaskQuery } from "../redux/features/tasks/taskApi";

const TaskPage = () => {
  const { email } = useSelector((state) => state.userSlice);
  const [open, setOpen] = useState(false);

  const { data: tasks = [], isLoading } = useGetTaskQuery(email);
  const pendingTask = tasks?.filter((task) => task.status === "pending");
  const progressTask = tasks?.filter((task) => task.status === "in progress");
  const completedTask = tasks?.filter((task) => task.status === "completed");

  return (
    <>
      <AddTaskModal open={open} setOpen={setOpen} />
      <div className="min-h-screen px-5 md:px-10 pt-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-semibold text-3xl uppercase">MY Tasks</h1>
          </div>
          <button className="btn-primary h-fit" onClick={() => setOpen(true)}>
            Add Task
          </button>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            <div className="relative  overflow-auto">
              <div className="flex sticky top-0  justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
                <h1 className="font-medium text-xl">Pending</h1>
                <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                  {pendingTask?.length}
                </p>
              </div>
              <div className="space-y-3">
                {pendingTask?.map((task) => (
                  <TaskCard key={task._id} task={task} />
                ))}
              </div>
            </div>
            <div className="relative  overflow-auto">
              <div className="flex sticky top-0 justify-between bg-[#eeabcc] p-5 rounded-md mb-3">
                <h1 className="font-medium text-xl">In Progress</h1>
                <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                  {progressTask?.length}
                </p>
              </div>
              <div className="space-y-3">
                {progressTask?.map((task) => (
                  <TaskCard key={task._id} task={task} />
                ))}
              </div>
            </div>
            <div className="relative  overflow-auto">
              <div className="flex sticky top-0 justify-between bg-[#afeec7] p-5 rounded-md mb-3">
                <h1 className="font-medium text-xl">Completed</h1>
                <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                  {completedTask?.length}
                </p>
              </div>
              <div className="space-y-3">
                {completedTask?.map((task) => (
                  <TaskCard key={task._id} task={task} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskPage;
