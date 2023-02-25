import { FaCode, FaHome, FaBriefcase, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa"
import { SiGoogleclassroom } from "react-icons/si"
import { BiCategory } from 'react-icons/bi'
import ToggleButton from 'react-toggle-button'

const Navbar1 = () => {

  return (
    <div class="flex bg-zinc-300 space-x-80 ">
      {/* left container */ }
      <div class="flex">
        <img src="https://images.ctfassets.net/hrltx12pl8hq/3MiLYuOESJbXrwoeXUI012/ccba97119444af2f25aa9cfddaf844bf/05-logos_548082964.jpg?fit=fill&w=480&h=270&fm=webp" alt="logo"
          class="object-cover h-10"
        />
        <div class="flex flex-initial items-center pl-10 pr-5 ">
          <FaHome class="pr-2 h-8 w-8" />
          <p>Home</p>
        </div>
        <div class="flex flex-initial items-center pr-10 ">
          <FaCode class="pr-2 h-8 w-8" />
          <p>Quizes</p>
        </div>
        <div class="flex flex-initial items-center pr-10 ">
          <FaBriefcase class="pr-2 h-8 w-8" />
          <p>Jobs</p>
        </div>
        <div class="flex flex-initial items-center pr-10 ">
          <BiCategory class="pr-2 h-8 w-8" />
          <p>Category</p>
        </div>
      </div>
      {/* left container ends */ }
      {/* right container */ }
      <div class="flex pl-36">
        <div class="flex flex-initial items-center pr-10">
          <ToggleButton />
        </div>
        <div class="flex flex-initial items-center pr-10 ">
          <SiGoogleclassroom class="pr-2 h-8 w-8" />
          <p>Teach with us</p>
        </div>
        <div class="flex space-x-4 items-center pr-2">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
          <FaLinkedinIn />
        </div>
        <div class="flex items-center">
          <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2  dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">Login</button>
        </div>
      </div>
      {/* right container ends */ }
    </div>
  )
}

export default Navbar1