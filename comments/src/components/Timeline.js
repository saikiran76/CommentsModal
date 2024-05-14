import { SlCalender } from "react-icons/sl";

const Timeline = ({color, size, value, visibility}) =>{
    return(
        <div className="flex items-center border-gray-300 border-l border-r border-t border-b rounded-3xl m-2">
            <div className={`m-4 ${!visibility ? 'hidden' : 'block'}`}><SlCalender style={{color:"gray"}}/></div>
            <h1 className={`font-bold ${color} ${size}`}>{value}</h1>

        </div>

    )
    
}

export default Timeline;

