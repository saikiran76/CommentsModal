import { CiCircleCheck } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const NavBar = () =>{
    return(
        <div className="flex justify-between">
            <div className="m-4 text-2xl text-red-600 cursor-pointer font-bold"><CiCircleCheck/></div>

            <div className="flex gap-1">
                <div className="m-4 text-2xl text-red-600 cursor-pointer font-bold"><AiOutlineDelete/></div>
                <div className="mt-4 mr-4 text-2xl text-red-600 cursor-pointer font-bold"><IoMdClose/></div>

            </div>

        </div>
    )

}

export default NavBar;