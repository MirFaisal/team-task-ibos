import AllTask from "./AllTask";
import CreateTask from "./CreateTask";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mt-32">
        {/* task */}
        <div className="rounded-lg">
          <CreateTask />
        </div>
        {/* team */}
        <div className="rounded-lg flex justify-end">
          <AllTask />
        </div>
      </div>
    </>
  );
};

export default Home;
