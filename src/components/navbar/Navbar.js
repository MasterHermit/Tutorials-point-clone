import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCode,
  FaHome,
  FaBriefcase,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { BiCategory } from "react-icons/bi";
import ToggleButton from "react-toggle-button";

const Navbar1 = () => {
  const [ toggle, setToggle ] = useState( false );

  return (
    <div className="flex bg-zinc-300 space-x-80">
      {/* left container */ }
      <div className="flex">
        <img
          src="https://images.ctfassets.net/hrltx12pl8hq/3MiLYuOESJbXrwoeXUI012/ccba97119444af2f25aa9cfddaf844bf/05-logos_548082964.jpg?fit=fill&w=480&h=270&fm=webp"
          alt="logo"
          className="object-cover h-10"
        />

        <Link to="/">
          <div className="flex flex-initial items-center pl-10 pr-5 ">
            <FaHome className="pr-2 h-8 w-8" />
            <p>Home</p>
          </div>
        </Link>
        <Link to="/quiz">
          <div className="flex flex-initial items-center pr-10 ">
            <FaCode className="pr-2 h-8 w-8" />
            <p>Quizes</p>
          </div>
        </Link>
        <Link to="/jobs">
          <div className="flex flex-initial items-center pr-10 ">
            <FaBriefcase className="pr-2 h-8 w-8" />
            <p>Jobs</p>
          </div>
        </Link>
        <Link to="category">
          <div className="flex flex-initial items-center pr-10 ">
            <BiCategory className="pr-2 h-8 w-8" />
            <p>Category</p>
          </div>
        </Link>
      </div>
      {/* left container ends */ }
      {/* right container */ }
      <div className="flex pl-36">
        <div className="flex flex-initial items-center pr-10">
          <ToggleButton
            value={ toggle }
            onToggle={ () => {
              setToggle( ( value ) => !value );
            } }
          />
        </div>
        <div className="flex flex-initial items-center pr-10 ">
          <SiGoogleclassroom className="pr-2 h-8 w-8" />
          <p>Teach with us</p>
        </div>
        <div className="flex space-x-4 items-center pr-2">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
          <FaLinkedinIn />
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Login
          </button>
        </div>
      </div>
      {/* right container ends */ }
    </div >
  );
};

export default Navbar1;
