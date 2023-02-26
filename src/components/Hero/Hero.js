import { useSelector } from "react-redux";
import "./Hero.css";
const Hero = () => {
  let isDark = useSelector(({ user }) => {
    return user.isDark;
  });
  let bg;
  bg = isDark ? "bg-[#111827] text-white" : "bright";
  return <div className={`hero ${bg}`}></div>;
};

export default Hero;
