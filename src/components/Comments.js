import { useState } from "react";
import { Comment } from "./Comment";
import { Image } from "./Image";
import { Text } from "./Italic";
import { IoMdSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { addComment, updateComment } from "../utils/commentSlice";


const Comments = () => {
    const dispatch = useDispatch();
    const comments = useSelector(store => store.comments.comments);
    const users = useSelector(store => store.user.user);

    const [input, setInput] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState("");

    const handleEdit = (index, text) => {
        setEditIndex(index);
        setEditText(text);
    };

    const saveEdit = () => {
        dispatch(updateComment({ index: editIndex, text: editText }));
        setEditIndex(null);
        setEditText("");
    };

    return (
        <div className="m-6 font-inter">
            <Text text="Comments" weight={"font-bold"} icon={""} />
            {comments.map((item, index) => (
                <div key={index}>
                    {editIndex === index ? (
                        <div>
                            <input
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                            />
                            <button onClick={saveEdit}>Save</button>
                            <button onClick={() => setEditIndex(null)}>Cancel</button>
                        </div>
                    ) : (
                        <Comment
                            name={users[users.length - 1]}
                            comment={item}
                            onEdit={() => handleEdit(index, item)}
                        />
                    )}
                </div>
            ))}
            <div className="send flex gap-4 items-center m-2 Inter">
                <Image width="w-[10%]" />
                <div className={`flex items-center rounded-[3em] border`}>
                    <input
                        className={`p-4 text-gray-300`}
                        placeholder="Write a comment..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <div className="m-4 cursor-pointer" onClick={() => dispatch(addComment(input))}>
                        <IoMdSend />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;

