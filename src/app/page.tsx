import LeftSidebar from "@/components/LeftSidebar";
import MainComponent from "@/components/MainComponent";
import { BsSearch } from "react-icons/bs";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black p-4">
      <div className="flex max-w-6xl w-full h-full relative ">
        <LeftSidebar />
        <MainComponent />
        <section className="w-full sticky top-2 mt-2 flex flex-col items-stretch h-screen px-6">
          <div>
            <div className="relative w-full h-full group">
              <input
                id="searchBox"
                type="text"
                placeholder="Search Twitter"
                className="outline-none peer focus-within:border-primary focus:border bg-neutral-900/90 w-full h-full rounded-full py-4 pl-14 pr-4"
              />
              <p className="peer-focus:visible invisible">Hello</p>
              <label
                htmlFor="searchBox"
                className="absolute top-0 left-0 h-full flex items-center justify-center p-4 text-gray-500 peer-focus:text-primary"
              >
                <BsSearch className="w-5 h-5 " />
              </label>
            </div>
          </div>
          <div></div>
          <div></div>
        </section>
      </div>
    </div>
  );
};

export default Home;
