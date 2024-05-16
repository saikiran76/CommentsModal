import { useState } from "react";
import { border } from "../utils/class";
import { Comment } from "./Comment";
import { Image } from "./Image";
import { Text } from "./Italic";
import { IoMdSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../utils/commentSlice";


const Comments = () =>{
    const dispatch = useDispatch();
    const comments = useSelector(store => store.comments.comments)
    const users = useSelector(store => store.user.user)

    const [input, setInput] = useState("");
    return(
        <div className="m-6 font-inter">
            <Text text="Comments" weight={"font-bold"} icon={""}/>
            {/* <Comment name={"Jane"} comment={"Thanks for assigning"}/> */}
            {
                comments.map((item, index)=>(
                <Comment key={index} name={users[users.length-1]} comment={item}/>
                ))
            }
            <div className="send flex gap-4 items-center m-2 Inter">
                <Image width="w-[10%]"/>
                <div className={`flex items-center rounded-[3em] ${border}`}>
                    <input className={`p-4 text-gray-300 `} placeholder="Write a comment..."
                    value={input}
                    onChange={(e)=>{
                        setInput(e.target.value)
                    }}
                    />

                    <div className="m-4 cursor-pointer" onClick={()=> dispatch(addComment(input))}><IoMdSend/></div>
                </div>
            </div>
        </div>
    )

}

export default Comments;