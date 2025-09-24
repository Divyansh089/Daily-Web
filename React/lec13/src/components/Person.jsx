import { useState } from "react";

function Person(){


    const [dog, setDog] = useState("Patel sahab");

    function handleNaam(){
        setDog("kumar sahab");
    }
    let [inp , setInp] = useState("");
    function handleInput(event){
        setInp(event.target.value);
        console.log(inp);
    }
    return(
        <>
        <h1>Person Component</h1>
        <input type="text" value={inp} onChange={handleInput} />
        <Chotu  naam = {dog}/> 
        <button onClick={handleNaam}>Naam badal dunga</button>  
        <Chotu  naam = "Shimba"/>
        <Chotu  naam = "nepali"/>
        <Chotu naam = "dodo"/>
        </>
    )
}

function Chotu(props){
    return (
        <>
        <h2>chai leke aaya maalik {props.naam}</h2>

        </>
    )
}


// inputs : are by default uncontrol input in react

// if ia want to chnage a uncontrolled input to controlled input then we have to use:
// 1. useState() hook to create a state variable ( useState("") )
// 2. onChange event to update the state variable ( event listener )
// 3. value attribute to bind the state variable to the input (value={stateVariable} )




// controlled input : when the value of the input is controlled by the react state
// uncontrolled input : when the value of the input is not controlled by the react state

export default Person;