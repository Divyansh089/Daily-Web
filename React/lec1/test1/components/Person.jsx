import react from "react";

function Person(props){
    return (                // props are immutable
        <div>
            <h1>Name: {props.name}</h1>
            <h2>Age: {props.age}</h2>
            <h3>Color : {props.color}</h3>
        </div>
    );
}
export default Person;