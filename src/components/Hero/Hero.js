import { useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import "./Hero.css";
const Hero = () => {
  let isDark = useSelector(({ user }) => {
    return user.isDark;
  });
  let bg;
  bg = isDark ? "bg-[#111827] text-white" : "bright";
  return (
    <div className={`w-full ${bg} flex item-center justify-center h-80`}>
      <SearchBar />
    </div>
  );
};

export default Hero;
