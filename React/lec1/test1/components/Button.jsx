import {useState} from "react";
function Button ({n}){
    let [name , setName] = useState(n);
    function handleName(){
        setName("Blank");
    }
    return (
        <div>
            <button onClick={handleName}>Change Name {name}</button>
        </div>
        
    )
}
export default Button;