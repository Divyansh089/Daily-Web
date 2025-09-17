import {  useState , useEffect} from 'react';

function Live(){
    const [count , setCount] = useState(0);

    useEffect(() =>{
        if(count === 0){
            console.log("component did mount");
        }
        if(count > 0 && count < 5){
            console.log("component did update");
        }
        if(count === 5){
            return () => (console.log("component will unmount"));
        }
    });

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Live;
