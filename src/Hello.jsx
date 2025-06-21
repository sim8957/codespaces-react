import './Hello.css'
export default function Hello(props) {

    return( 
        <>
            <img src="momonga.jpg" width="200"/>
            <h1>Hello,{props.name} 
                {props.surname} 
                {props.weight} kg.</h1>
        </>
    );
             
}
