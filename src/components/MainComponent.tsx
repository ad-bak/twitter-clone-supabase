"use client";

import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";

import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { IoShareOutline, IoStatsChart } from "react-icons/io5";

const MainComponent = () => {
  return (
    <main className="flex-grow w-3/5 h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
      <h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0">Home</h1>
      <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-6 space-x-2 border-gray-600 relative">
        <div className="w-11 h-11 bg-slate-400 rounded-full flex-none"></div>
        <div className="flex flex-col w-full h-full">
          <input
            type="text"
            className="w-full h-full text-2xl bg-transparent placeholder:text-gray-600 border-b-[0.5px] border-gray-600 p-4 outline-none border-none"
            placeholder="What's happening? "
          />
          <div className="w-full justify-between items-center flex">
            <div></div>
            <div className="w-full max-w-[100px]">
              <button className="rounded-full bg-primary px-4 py-2 w-full text-lg text-center hover:bg-opacity-70 transition-duration-200 font-bold">
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="border-t-[0.5px] border-gray-600 p-2 flex space-x-4">
            <div>
              <div className="w-10 h-10 bg-slate-200 rounded-full" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center w-full justify-between">
                <div className="flex items-center space-x-1 w-full">
                  <div className="font-bold">Club of coders</div>
                  <div className="text-gray-500">@clubofcoders</div>
                  <div className="text-gray-500">
                    <BsDot />
                  </div>
                  <div className="text-gray-500">1 hour ago</div>
                </div>
                <div>
                  <BsThreeDots />
                </div>
              </div>
              <div className="text-white text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia enim temporibus
                impedit fugit accusantium voluptatum autem voluptatibus, porro recusandae facilis
                eligendi cumque in aperiam expedita dolorum deleniti a accusamus, amet nesciunt
                quisquam iusto quae doloremque rerum soluta. Laudantium, dolores. Iure, omnis
                reprehenderit animi magnam quisquam excepturi esse molestias, magni itaque ex
                nesciunt eligendi veritatis similique culpa, laudantium nisi ut debitis vel
                reiciendis laboriosam asperiores! Earum eos doloribus laudantium recusandae maxime
                nam, dolore necessitatibus quam, autem ut officia sunt nobis ex pariatur debitis
                fuga, ad eius eaque nemo dicta! Expedita, similique? Assumenda, odit. Vitae ducimus
                fuga quia quae.
              </div>
              <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2"></div>
              <div className="flex items-center justify-start space-x-20 mt-2 w-full">
                <div className="rounded-full hover:bg-white/10 transition duration-200 cursor-pointer p-2">
                  <BsChat />
                </div>
                <div className="rounded-full hover:bg-white/10 transition duration-200 cursor-pointer p-2">
                  <AiOutlineRetweet />
                </div>
                <div className="rounded-full hover:bg-white/10 transition duration-200 cursor-pointer p-2">
                  <AiOutlineHeart />
                </div>
                <div className="rounded-full hover:bg-white/10 transition duration-200 cursor-pointer p-2">
                  <IoStatsChart />
                </div>
                <div className="rounded-full hover:bg-white/10 transition duration-200 cursor-pointer p-2">
                  <IoShareOutline />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainComponent;
