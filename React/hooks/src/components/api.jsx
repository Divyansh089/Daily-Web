// import { useState, useEffect } from 'react'

// function API(){
//   const [data, setData] = useState(null);

//   useEffect(() => { // accept two args first is the callblack function and second is the dependency array
//     const fetchData = async () => {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const json = await response.json();
//       setData(json);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>API Data</h1>
//       {data ? (
//         <ul>
//           {data.map(item => (
//             <li key={item.id}>{item.title}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   )
// }

// export default API;
import  { useState, useEffect } from 'react'; // using axios for fetching data
import axios from 'axios';
function API() {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
                const posts = res.data;
                setData(posts);
            }catch (error) {
                console.log(error);
            }
        };
        fetchData();
    } , []);

    return (
        <>
        <h1>API Data</h1>
        {data ? (
            <ul>
            {data.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
            </ul>
        ) : (
            <p>Loading...</p>
        )}
        </>
    );
}
export default API;