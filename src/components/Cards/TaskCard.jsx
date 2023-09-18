import {
  ArchiveBoxIcon,
  CheckCircleIcon,
  PlayCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  useArchiveTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskStatusMutation,
} from "../../redux/features/tasks/taskApi";
import Loading from "../Loading";

const TaskCard = ({ task }) => {
  // task status
  let updatedStatus;
  if (task.status === "pending") {
    updatedStatus = "in progress";
  } else if (task.status === "in progress") {
    updatedStatus = "completed";
  }

  const [isOpenLoading, setIsOpenLoading] = useState(false);

  // ! Task update handler
  const [updateTaskStatus, { data: updatedRes }] =
    useUpdateTaskStatusMutation();
  const taskUpdateHandler = (id) => {
    setIsOpenLoading(true);
    updateTaskStatus({ id, data: { status: updatedStatus } });
  };

  // ! Task Delete Handler
  const [deleteTask, { data: deletedRes }] = useDeleteTaskMutation();
  const handelDeleteTask = (id) => {
    setIsOpenLoading(true);
    deleteTask(id);
  };

  // ! Archive Task Handler
  const [archiveTask, { data: achievedRes }] = useArchiveTaskMutation();
  const handelArchiveTask = (id) => {
    setIsOpenLoading(true);
    archiveTask(id);
  };

  // notification handler
  useEffect(() => {
    if (deletedRes && deletedRes?.deletedCount) {
      toast.success("Deleted Successfully!");
    }
    if (achievedRes && achievedRes.insertedId) {
      toast.success("Achieved Successfully!");
    }
    if (updatedRes || achievedRes || deletedRes) {
      setIsOpenLoading(false);
    }
  }, [deletedRes, achievedRes, updatedRes]);

  return (
    <div className="bg-white text-black border border-[#0B1120] rounded-md p-5 ">
      <h1
        className={`text-lg font-semibold mb-3 ${
          task.priority === "high" ? "text-red-500" : " "
        } ${task.priority === "medium" ? "text-blue-500" : " "} ${
          task.priority === "low" ? "text-green-500" : " "
        }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3 ">{task?.description}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.date}</p>
        <div className="flex gap-3">
          {task?.status === "pending" && (
            //! -------------- Delete Task Button ---------
            <button title="Delete" onClick={() => handelDeleteTask(task._id)}>
              <TrashIcon className="h-6 w-6 text-red-500" />
            </button>
          )}
          {task?.status !== "completed" ? (
            //! ------------- Task Update btn -----------
            <button onClick={() => taskUpdateHandler(task._id)}>
              {task?.status === "in progress" ? (
                <CheckCircleIcon
                  title="Make Completed"
                  className="h-6 w-6 text-green-500"
                />
              ) : (
                <PlayCircleIcon
                  title="Start Task"
                  className="h-6 w-6 text-blue-500"
                />
              )}
            </button>
          ) : (
            //! -------------  Archive Task Btn -----------
            <button title="Archive" onClick={() => handelArchiveTask(task._id)}>
              <ArchiveBoxIcon className="h-6 w-6 text-red-500" />
            </button>
          )}
        </div>
      </div>
      <Loading isOpenLoading={isOpenLoading} />
    </div>
  );
};

export default TaskCard;
