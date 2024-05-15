import { Image } from "./Image"

export const Comment = ({name, comment}) =>{
    return(
        <div className="comment flex gap-6 items-center">
            <Image/>
            <div>
                <h2 className="text-green-600">{name}</h2>
                <p className="text-gray-300">{comment}</p>
            </div>


        </div>

    )
}

