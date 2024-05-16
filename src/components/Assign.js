import { IoMdArrowDropdown } from "react-icons/io";
import { Text } from "./Italic";
import { CiUser } from "react-icons/ci";
import { Image } from "./Image";
import { Assignes } from "../utils/class";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";




const Assign = () =>{
    const dispatch = useDispatch();

    const handleUserChange = (item) => {
        console.log(item)
        dispatch(addUser(item));
        
      };
    // const user = useSelector(store => store.user.users)
    return(
        <div className="m-7 items-center flex justify-between">
            <Text text="Assign to:" icon={<CiUser/>}/>
            
            <div className="rounded-[3rem] border-gray-300 border-l border-r border-t border-b p-2 flex items-center w-[12em] text-green-400">
                <Image/>
                <select onChange={(e)=>{
                    handleUserChange(e.target.value)
                }}>
                    {Assignes.map((item, index)=>(
                        <option key={index} value={item} >{item}</option>
                    ))}
           
                    {/* <option value="fruit">Fruit</option>

                    <option value="vegetable">Vegetable</option>

                    <option value="meat">Meat</option> */}
                </select>
                <div className="cursor-pointer"><IoMdArrowDropdown/></div>
            </div>


        </div>

    )
}
export default Assign;