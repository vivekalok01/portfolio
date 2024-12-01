import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {

  const [ getval, setval ] = useState(false)
  return (
    <>

      <div className=" border-b-[2px] sticky z-10 top-0 bg-white">
        <header className="flex max-w-[1300px] px-2 m-auto justify-between text-[18px] font-semibold py-[20px] text-gray-600">
        <h2><Link to='/' className="hover:text-blue-600 text-[24px] font-extrabold">Vivek.Alok</Link></h2> 
          
          <ul className=" gap-7 hidden md:flex">
            <li className=""><Link to='/' className="hover:text-blue-600">Home</Link></li>
            <li><Link to='/project'>Projects</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
          <CiMenuFries className="md:hidden text-[23px] font-bold cursor-pointer" onClick={() => setval(!getval)} />
        </header>
        {
          getval && <ul className="absolute z-20 md:hidden bg-white px-3  w-[150px] h-[200px] right-0 gap-7 flex justify-start items-start  flex-col">
            <li className=""><Link to='/' className="hover:text-blue-600">Home</Link></li>
            <li><Link to='/project'>Projects</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        }
      </div>

    </>
  )
}

export default Header
