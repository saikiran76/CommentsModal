import { Image } from "./Image"

export const Comment = ({name, comment, onEdit}) =>{
    return(
        <div className="comment flex gap-6 items-center mt-4 mb-3">
            <Image width="w-[4%]"/>
            <div>
                <h2 className="text-green-600">{name}</h2>
                <p className="text-gray-300">{comment}</p>
                <button onClick={onEdit}>Edit</button>
            </div>


        </div>

    )
}

