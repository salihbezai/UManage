import { DataTable } from "./DataTable";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="mx-auto px-4 max-w-screen-xl bg-[#4E4E4E] h-screen ">
      <header className="bg-[#4E4E4E] h-15 flex items-center px-5">
        <h1 className="text-4xl font-bold text-white">UManage</h1>
      </header>
      <div className="bg-[#4E4E4E] px-5 ">
        <DataTable />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
