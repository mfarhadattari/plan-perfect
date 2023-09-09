import {
  ArchiveBoxIcon,
  CheckCircleIcon,
  PlayCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

const TaskCard = ({ task }) => {
  let updatedStatus;

  if (task.status === "pending") {
    updatedStatus = "running";
  } else if (task.status === "running") {
    updatedStatus = "done";
  } else {
    updatedStatus = "archive";
  }

  console.log(updatedStatus);

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
            <button title="Delete">
              <TrashIcon className="h-6 w-6 text-red-500" />
            </button>
          )}
          {task?.status !== "completed" ? (
            <button>
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
            <button title="Archive">
              <ArchiveBoxIcon className="h-6 w-6 text-red-500" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
