const TaskPage = () => {
  return (
    <>
      <div className="h-screen px-5 md:px-10 pt-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-semibold text-3xl uppercase">MY Tasks</h1>
          </div>
          <button className="btn-primary h-fit">Add Task</button>
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          <div className="relative  overflow-auto">
            <div className="flex sticky top-0  justify-between bg-[#D3DDF9] p-5 rounded-md mb-3">
              <h1 className="font-medium text-xl">Pending</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                0
              </p>
            </div>
            <div className="space-y-3">
              <h1>Tasks</h1>
            </div>
          </div>
          <div className="relative  overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#eeabcc] p-5 rounded-md mb-3">
              <h1 className="font-medium text-xl">In Progress</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                0
              </p>
            </div>
            <div className="space-y-3">
              <h1>Task</h1>
            </div>
          </div>
          <div className="relative  overflow-auto">
            <div className="flex sticky top-0 justify-between bg-[#afeec7] p-5 rounded-md mb-3">
              <h1 className="font-medium text-xl">Completed</h1>
              <p className="bg-primary text-white w-6 h-6 grid place-content-center rounded-md">
                0
              </p>
            </div>
            <div className="space-y-3">
              <h1>Task</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskPage;
