import { TrashIcon } from "@heroicons/react/24/solid";

const ArchiveCard = ({ task }) => {
  return (
    <div className="bg-gray-100 bg-opacity-50 rounded-md p-5">
      <h1 className="text-lg font-semibold mb-3 text-red-500">{task?.title}</h1>
      <p className="mb-3">{task?.description}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.date}</p>
        <button title="Delete">
          <TrashIcon className="h-6 w-6 text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default ArchiveCard;
