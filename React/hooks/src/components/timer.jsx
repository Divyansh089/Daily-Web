import { useState , useEffect } from "react";

function Timer(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>Timer: {count}</h2>
        </div>
    );
}

export default Timer;