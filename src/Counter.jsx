import { useState } from "react";
export default function counter() {
       const [count,setCount]=useState(0);
       return (<>
       
       <button onClick={()=>setCount(count+1)}>
        <img src = "momonga.jpg" width="250">
        </img>
        Attack momonga
        </button>
        <button onClick={()=>setCount(count-1)}>
        heal momonga
        </button>
        <button onClick={()=>setCount(count==0)}>
        reset hp
        </button>
       <p>you clicked {count} times
       </p>
       <p>
        momonga hp {300-count} time
       </p>

        </>);
}