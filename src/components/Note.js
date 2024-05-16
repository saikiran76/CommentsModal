import { border } from "../utils/class";
import { Text } from "./Italic";
import { FaRegStickyNote } from "react-icons/fa";

const Note = () =>{
    return(
        <div className="flex items-center mb-6">
            <div className="block m-6"><Text text="Note:" icon={<FaRegStickyNote/>}/></div>
            <div className={`${border} p-4 rounded-[1.5em] w-[17em]`}>
                <h1 className="">09382049832</h1>
                <h1 className="">www.flowervendor.com</h1>
            </div>
        </div>
    )

}

export default Note;