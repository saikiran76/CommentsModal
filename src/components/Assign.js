import { IoMdArrowDropdown } from "react-icons/io";
import { Text } from "./Italic";
import { CiUser } from "react-icons/ci";
import { Image } from "./Image";
import { Assignes } from "../utils/class";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useState } from "react";


const Assign = () => {
    const dispatch = useDispatch();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(Assignes[0]); 

    const handleUserChange = (item) => {
        console.log(item);
        dispatch(addUser(item));
        setSelectedUser(item);
        setIsDropdownOpen(false); 
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="m-7 items-center flex justify-between">
            <Text text="Assign to:" icon={<CiUser />} />
            
            <div className="rounded-[3rem] border-gray-300 border-l border-r border-t border-b p-2 flex items-center w-[12em] text-green-400">
                <Image />
                <div className="relative w-full">
                    <div className="cursor-pointer flex justify-between items-center" onClick={toggleDropdown}>
                        <span>{selectedUser}</span>
                        <IoMdArrowDropdown />
                    </div>
                    {isDropdownOpen && (
                        <select
                            className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-300 rounded-md"
                            value={selectedUser}
                            onChange={(e) => handleUserChange(e.target.value)}
                            onBlur={() => setIsDropdownOpen(false)}
                        >
                            {Assignes.map((item, index) => (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    )}
                </div>
            </div>
        </div>
    );
};


export default Assign;