import './bmi.css'
import { useState,useRef } from "react";
function Bmitext({bmi}){
    if(bmi<18.5)
     return (<><h1>Underweight<br/>
    <img src="bug.jpg" width="500"></img>
    </h1></>);
    if(bmi>30)
    return (<><h1>Overweight <br/>
        <img src="usagi.jpg" width="500"></img>
        </h1></>);
    return (<><h1>Normal<br></br> 
        <img src="momonga.jpg" width="500"></img>
        </h1></>);
}
export default function Bmi(){
    const w_inputRef=useRef(null);
    const h_inputRef=useRef(null);
    const [bmi,setBmi]=useState(0);
    function calBmi(){
        let w=w_inputRef.current.value;
        let h=h_inputRef.current.value/100;
        console.log(w,h);
        setBmi(w/(h*h));
    }
    return(<>
    <h1>bmi Calcualtor</h1>
    weight<input ref={w_inputRef} /> kg. <br/>
    height<input ref={h_inputRef} /> cm. <br/>
    <button onClick={calBmi}>Calculate</button><br/>
    Bmi:{bmi.toFixed(2)};<br/>
    <Bmitext bmi= {bmi}/>
    
    </>)
    
}