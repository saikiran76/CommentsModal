import { useState } from "react";
import { border } from "../utils/class";
import { Comment } from "./Comment";
import { Image } from "./Image";
import { Text } from "./Italic";
import { IoMdSend } from "react-icons/io";

const Comments = () =>{
    const [input, setInput] = useState("");
    return(
        <div className="m-6">
            <Text text="Comments" weight={"font-bold"} icon={""}/>
            <Comment name={"Jane"} comment={"Thanks for assigning"}/>
            <div className="send flex gap-4 items-center m-2">
                <Image width="w-[10%]"/>
                <div className={`flex items-center rounded-[3em] ${border}`}>
                    <input className={`p-4 text-gray-300 `} placeholder="Write a comment..."
                    value={input}
                    onChange={(e)=>{
                        setInput(e.target.value)
                    }}
                    />

                    <div className="m-2 cursor-pointer"><IoMdSend/></div>
                </div>
            </div>
        </div>
    )

}

export default Comments;