import LeftSidebar from "@/components/LeftSidebar";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-between bg-black relative">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSidebar />
        <main className="ml-[275px]">Home</main>
        <section></section>
      </div>
    </div>
  );
};

export default Home;
