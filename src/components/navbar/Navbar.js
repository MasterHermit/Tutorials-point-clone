import {FaCode,FaHome} from "react-icons/fa"
import ToggleButton from 'react-toggle-button'

const Navbar1 = () => {

  return (
    <div class="flex pt-3">
      <div class="flex flex-initial items-center pl-10 pr-5 ">
        <FaHome class="pr-2 h-5 w-5" />
        <p>Home</p>
      </div>
      <div class="flex flex-initial items-center pr-10 ">
        <FaCode class="pr-2" />
        <p>Coding Ground</p>
      </div>
      <ToggleButton />
    </div>
  )
}

export default Navbar1