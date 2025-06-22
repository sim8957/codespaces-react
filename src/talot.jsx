import { useState } from "react";
function Item({name}){
    const [pack,setPack]=useState(0);
    function RandomDice(){
        letnum=Math.round(Math.random()*6)+1;
        setPack(num);
    }
    if(pack%6==0)
        return (<li> onClick={Randomdice}>{name}⚀</li>);
    if(pack%6==1)
        return (<li> onClick={Randomdice}>{name}⚁</li>);
    if(pack%6==2)
        return (<li> onClick={Randomdice}>{name}⚂</li>);
    if(pack%6==3)
        return (<li> onClick={Randomdice}>{name}⚃</li>);
    if(pack%6==4)
        return (<li> onClick={Randomdice}>{name}⚄</li>);
    if(pack%6==5)
       return (<li> onClick={Randomdice}>{name}⚅</li>);

}
export default function Backpack(){
    return(<>
    <h1>Rolldice</h1>
       <ol>
            <Item name="sadasdsa"></Item>
       </ol>
    
    </>)
}