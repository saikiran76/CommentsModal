import { Image } from "./Image"

export const Comment = ({name, comment}) =>{
    return(
        <div className="comment flex gap-6 items-center mt-4 mb-3">
            <Image width="w-[10%]"/>
            <div>
                <h2 className="text-green-600">{name}</h2>
                <p className="text-gray-300">{comment}</p>
            </div>


        </div>

    )
}

