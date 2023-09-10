import { TrashIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDeleteArchiveMutation } from "../redux/features/archive/archiveApi";

const ArchiveCard = ({ archive }) => {
  const [deleteArchive, { data: deletedRes }] = useDeleteArchiveMutation();

  // notification handler
  useEffect(() => {
    if (deletedRes && deletedRes?.deletedCount) {
      toast.success("Deleted Successfully!");
    }
  }, [deletedRes]);

  return (
    <div className="bg-gray-100 bg-opacity-70 rounded-md p-7">
      <h1 className="text-lg font-semibold mb-3 text-red-500">
        {archive?.title}
      </h1>
      <p className="mb-3">{archive?.description}</p>
      <div className="flex justify-between mt-3">
        <p>{archive?.date}</p>
        <button title="Delete" onClick={() => deleteArchive(archive?._id)}>
          <TrashIcon className="h-6 w-6 text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default ArchiveCard;
