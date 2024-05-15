import { IoMdArrowDropdown } from "react-icons/io";
import { Text } from "./Italic";
import { CiUser } from "react-icons/ci";


const Assign = () =>{
    return(
        <div className="m-7 items-center flex justify-between">
            <Text text="Assign to:" icon={<CiUser/>}/>
            
            <div className="rounded-[3rem] border-gray-300 border-l border-r border-t border-b p-2 flex items-center w-[12em] text-green-400">
                <img className="rounded-[240%] w-[19%] m-2" src="https://s3-alpha-sig.figma.com/img/1099/2dd1/50bf7910cc579cb35352125504544458?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ecYuzGm1qsTlZ3EGTaEQgNsZeSLsRAOk7TyOsyt9IkhQFvH8Qg1cg0ex-UE0dvs~rKrTpCjP9rBiB6k0S453StdPwBq4DocNGSfk~bE6YaDciekQyXRBrxmndskwdlBlnBtiBM21TSVAZIxfjIg1Y6ZObOztQYCIOBk4F4betUZ3iQWRm0DugWjG8Xw0M0nSFqz0PzjP--4MZfN-nuMl7gzAjC7m~jSGY~9ThDcZ~oDXP0rzY1wwqlL6bGPm7QS1L1NN47Anfb5Yv0TxDDjuAr7-Q-3X2iarmh1OzpEFMTg6r9-ylYk958hpRXPbkWoZ18pw88S9~iolQh4cklVReA__" alt="prof"/>
                <select>
           
                    <option value="fruit">Fruit</option>

                    <option value="vegetable">Vegetable</option>

                    <option value="meat">Meat</option>
                </select>
                <div className="cursor-pointer"><IoMdArrowDropdown/></div>
            </div>


        </div>

    )
}
export default Assign;