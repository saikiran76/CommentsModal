

export const Text = ({text, icon, weight, size}) =>{
    return(
        <h2 className={`flex gap-3 ${size} italic items-center ${weight}`}>{icon}{text}</h2>
    )
}

