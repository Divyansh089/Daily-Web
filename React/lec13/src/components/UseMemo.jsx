import React, { useMemo  , useState} from "react"


function UseMemo () {
  const [inp, setinp] = useState(0);
  const [count, setcount] = useState(0);

  let out = useMemo(() => {
    let ans = 0;
    for(let item = 1;item <= inp;item++){
        console.log("loop chala");
        ans += item;
    }
    return ans;
  }, [inp]);

  function handleInput(event){
    setinp(Number(event.target.value));
  }
  return (
    <div>
      <input type="number" value={inp} onChange={handleInput} />
      <h2>Output: {out}</h2>
        <button onClick={() => setcount(count + 1)}>count {count}</button>
    </div>
  )
}

export default UseMemo;
