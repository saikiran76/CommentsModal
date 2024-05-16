import NavBar from "./NavBar"
import Timeline from "./Timeline"
import Assign from "./Assign"
import Note from "./Note"


const TopSection = () =>{
    return(
        <div className="top border-gray-300 border-b m-4 font-inter">
            <NavBar/>
            <Timeline visibility={false} value={"Flower Arrangement"} color={"text-red-600"} size={"text-2xl"} />
            <Timeline visibility={true} value={"Dec 5, 2024 at 8:00-10:00 AM"} size={"text-base"}/>
            <Assign/>
            <Note/>
        </div>
    )
} 

export default TopSection;