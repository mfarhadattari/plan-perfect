import ArchiveCard from "../components/ArchiveCard";

const ArchivePage = () => {
  const archives = [
    {
      _id: 1,
      title: "Complete homework",
      description: "Finish the math assignment by 5 PM.",
      date: "2023-09-15",
      userName: "Mohammad Farhad",
      userEmail: "mfarhad.dev@gmail.com",
    },
    {
      _id: 2,
      title: "Buy groceries",
      description: "Purchase milk, eggs, and bread.",
      date: "2023-09-10",
      userName: "Mohammad Farhad",
      userEmail: "mfarhad.dev@gmail.com",
    },
    {
      _id: 3,
      title: "Go to the gym",
      description: "Work out for an hour.",
      date: "2023-09-12",
      userName: "Mohammad Farhad",
      userEmail: "mfarhad.dev@gmail.com",
    },
    {
      _id: 4,
      title: "Go to the gym",
      description: "Work out for an hour.",
      date: "2023-09-12",
      userName: "Mohammad Farhad",
      userEmail: "mfarhad.dev@gmail.com",
    },
    {
      _id: 5,
      title: "Go to the gym",
      description: "Work out for an hour.",
      date: "2023-09-12",
      userName: "Mohammad Farhad",
      userEmail: "mfarhad.dev@gmail.com",
    },
  ];

  return (
    <div className="h-screen px-5 md:px-10 pt-10">
      <div>
        <h1 className="font-semibold text-3xl uppercase">Archives</h1>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {archives?.map((task) => (
          <ArchiveCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ArchivePage;
