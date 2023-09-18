import { useSelector } from "react-redux";
import ArchiveCard from "../components/Cards/ArchiveCard";
import Loader from "../components/Loader";
import NoDataFound from "../components/NoDataFound";
import { useGetArchiveQuery } from "../redux/features/archive/archiveApi";

const ArchivePage = () => {
  const { email } = useSelector((state) => state.userSlice);
  const { data: archives = [], isLoading } = useGetArchiveQuery(email);

  return (
    <div className="min-h-screen px-5 md:px-10 pt-10">
      <div>
        <h1 className="font-semibold text-3xl uppercase">Archives</h1>
      </div>
      {isLoading ? (
        <Loader />
      ) : !isLoading && archives.length > 0 ? (
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {archives?.map((archive) => (
            <ArchiveCard key={archive._id} archive={archive} />
          ))}
        </div>
      ) : (
        <NoDataFound />
      )}
    </div>
  );
};

export default ArchivePage;
