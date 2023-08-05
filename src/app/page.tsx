import LeftSidebar from "@/components/LeftSidebar";
import MainComponent from "@/components/MainComponent";
import RightSection from "@/components/RightSection";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center text-white relative bg-black ">
      <div className="flex max-w-6xl w-full h-full relative ">
        <LeftSidebar />
        <MainComponent />
        <RightSection />
      </div>
    </div>
  );
};

export default Home;
