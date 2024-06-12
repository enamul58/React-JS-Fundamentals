import { useState } from "react";
import React from "react";

export default function IncreDecre({cal, calFunction}) {
    const [increment, setIncrement] = useState();
  const [decrement, setDecrement] = useState();
  const [show, setShow] = useState();
    
    const setIncreDecrement = () => {
        if (cal == "increment") {
            calFunction(){
                setIncrement((prevState) => prevState + 1);
            }
        }
    }
    
    return (
        <>

        </>
    )
    
}