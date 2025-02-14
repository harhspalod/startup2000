import { MdWork } from "react-icons/md";
import { FaPhotoVideo } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaRegComment } from 'react-icons/fa';



const links = [
  {
    id: 1,
    text: "Ideas",
    path: "/user/work",
    icon: <MdWork />,
  },
  {
    id: 2,
    text: "Profile",
    path: "/user/message",
    icon: <FaUser />,
  },
  {
    id: 3,
    text: "Explore",
    path: "/user/explore",
    icon: <MdExplore />,
  },
  {
    id: 4,
    text: "Overview",
    path: "/user/feeds",
    icon: <FaPhotoVideo />,
  },
  {
    id: 3,
    text: "Chat",
    path: "/chats",
    icon: <FaRegComment />,
  }
];

export default links;
