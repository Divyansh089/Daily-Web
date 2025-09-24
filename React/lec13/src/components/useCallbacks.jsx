
import React ,{memo , useState , useCallbacks} from 'react';

function useCallbacks () {
    const [count, setcount] = useState(0);

    let a = useCallback(() => {
        console.log("function chali");
    }, []);
  return (
    <div>
      
    </div>
  )
}

export default useCallbacks
