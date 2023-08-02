import Link from "next/link";

import { BiHomeCircle, BiUser } from "react-icons/bi";
import { HiOutlineHashtag } from "react-icons/hi";
import { BsBell, BsBookmark, BsEnvelope, BsThreeDots, BsTwitter } from "react-icons/bs";

const navigation_items = [
  {
    title: "Twitter",
    icon: BsTwitter,
  },
  {
    title: "Home",
    icon: BiHomeCircle,
  },
  {
    title: "Explore",
    icon: HiOutlineHashtag,
  },
  {
    title: "Notifications",
    icon: BsBell,
  },
  {
    title: "Messages",
    icon: BsEnvelope,
  },
  {
    title: "Bookmarks",
    icon: BsBookmark,
  },
  {
    title: "Profile",
    icon: BiUser,
  },
];

const LeftSidebar = () => {
  return (
    <section className="fixed w-{275px} flex flex-col items-stretch h-screen">
      <div className="flex flex-col items-stretch h-full space-y-4 my-4">
        {navigation_items.map((item) => (
          <Link
            href={`/${item.title.toLowerCase()}`}
            key={item.title}
            className="hover:bg-white/10 text-2xl transition duration-200 flex items-center w-fit justify-start space-x-4 rounded-3xl py-2 px-6"
          >
            <div>
              <item.icon />
            </div>
            <div>{item.title !== "Twitter" && <div>{item.title}</div>}</div>
          </Link>
        ))}
        <button className="rounded-full m-4 bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200">
          Tweet
        </button>
      </div>
      <button className="rounded-full flex items-center space-x-2 m-4 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 w-full justify-between">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-slate-400 w-10 h-10"></div>
          <div className="text-left text-sm">
            <div className="font-semibold">Club of Coders</div>
            <div className="">@clubofcoders</div>
          </div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
};

export default LeftSidebar;
