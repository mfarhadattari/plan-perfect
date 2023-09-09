import { useState } from "react";
import AddTaskModal from "../components/AddTaskModal";
import TaskCard from "../components/TaskCard";

const TaskPage = () => {
  const tasks = [
    {
      _id: 1,
      title: "Complete homework",
      description: "Finish the math assignment by 5 PM.",
      date: "2023-09-15",
      status: "pending",
      userName: "Mohammad Farhad",
      userEmail: "mfarhad.dev@gmail.com",
      priority: "high",
    },
    {
      _id: 2,
      title: "Buy groceries",
      description: "Purchase milk, eggs, and bread.",
      date: "2023-09-10",
      status: "in progress",
      userName: "Mohammad Farhad",
      userEmail: "mfarhad.dev@gmail.com",
      priority: "low",
    },
    {
      _id: 3,
      title: "Go to the gym",
      description: "Work out for an hour.",
      date: "2023-09-12",
      status: "completed",
      userName: "Mohammad Farhad",
      userEmail: "mfarhad.dev@gmail.com",
      priority: "medium",
    },
  ];

  const pendingTask = tasks?.filter((task) => task.status === "pending");
  const progressTask = tasks?.filter((task) => task.status === "in progress");
  const completedTask = tasks?.filter((task) => task.status === "completed");

  const [open, setOpen] = useState(false);

  return (
    <>
      <AddTaskModal open={open} setOpen={setOpen} />
      <div className="h-screen px-5 md:px-10 pt-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-semibold text-3xl uppercase">MY Tasks</h1>
          </div>
          <button className="btn-primary h-fit" onClick={() => setOpen(true)}>
            Add Task
          </button>
        </div>
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
      </div>
    </>
  );
};

export default TaskPage;
