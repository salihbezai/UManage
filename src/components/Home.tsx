import { DataTable } from "./DataTable";
import ToolBar from "./ToolBar";

const Home = () => {
  return (
    <div className="mx-auto px-4 max-w-screen-xl">
      <header className="bg-[#4E4E4E] h-15 flex items-center px-5">
        <h1 className="text-4xl font-bold text-white">UManage</h1>
      </header>
      <div className="bg-[#4E4E4E] px-5 ">
        <ToolBar />
        <DataTable />
      </div>
    </div>
  );
};

export default Home;
