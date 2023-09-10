import {
  ArchiveBoxIcon,
  CheckCircleIcon,
  PlayCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import {
  useArchiveTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskStatusMutation,
} from "../redux/features/tasks/taskApi";

const TaskCard = ({ task }) => {
  // task status
  let updatedStatus;
  if (task.status === "pending") {
    updatedStatus = "in progress";
  } else if (task.status === "in progress") {
    updatedStatus = "completed";
  }

  // ! Task update handler
  const [updateTaskStatus] = useUpdateTaskStatusMutation();
  const taskUpdateHandler = (id) => {
    updateTaskStatus({ id, data: { status: updatedStatus } });
  };

  // ! Task Delete Handler
  const [deleteTask] = useDeleteTaskMutation();

  // ! Archive Task Handler
  const [archiveTask] = useArchiveTaskMutation();

  return (
    <div className="bg-gray-100 bg-opacity-50 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3 ${
          task.priority === "high" ? "text-red-500" : " "
        } ${task.priority === "medium" ? "text-blue-500" : " "} ${
          task.priority === "low" ? "text-green-500" : " "
        }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.date}</p>
        <div className="flex gap-3">
          {task?.status === "pending" && (
            //! -------------- Delete Task Button ---------
            <button title="Delete" onClick={() => deleteTask(task._id)}>
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
            <button title="Archive" onClick={() => archiveTask(task._id)}>
              <ArchiveBoxIcon className="h-6 w-6 text-red-500" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
