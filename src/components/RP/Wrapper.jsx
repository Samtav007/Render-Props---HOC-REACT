import {useState} from "react"


    export default function Wrapper(props){
    const [counter, setCounter]=useState(0);
    const handleCount=()=>{
        setCounter(counter=>counter+1)
    }
    return(
        <div>
            {props.render(counter,handleCount)}
        </div>)
    }
   
