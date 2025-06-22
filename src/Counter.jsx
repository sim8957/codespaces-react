import { useState } from "react";
export default function counter() {
       const [count,setCount]=useState(0);
       const [value,setValue]=useState("");
       function onTextChange(event){
        console.log("this function is called!"+event.target.value);
        console.error("this is error!!!!!")
        setValue(event.target.value);
       }
       return (<>
        <input value={value} onChange={(event)=>onTextChange(event)}/>
        <p>You typed {value.length} characters</p>
        <p>{value} Celcis to {value*1.8+32} fahrenheit</p>
        <p>{value} Kilometers {value*0.621} miles</p>
        <p>{value} centimeter to {value/100} mate </p>
        <p>{value} baht to {value/108} VND </p>

       <button onClick={()=>setCount(count+1)}>
        <img src = "momonga.jpg" width="200"/>
        <h1>Attack momonga</h1>
        </button>
         
        <button onClick={()=>setCount(count-1)}>
        <img src = "eat.jpg" width="200" height={200}/>
        <h1>heal momonga</h1>
        </button>
        <button onClick={()=>setCount(count==0)}>
        <h1>reset hp</h1>
        </button>
       <p>you clicked {count} times
       </p>
       <p>
        momonga hp {300-count} time
       </p>

        </>);
}