// Code Keypad Component Here
/*
1. Import React from "react"
2. render input of type password
3. Add onChange event handler to the input variable,
4. onEvent fire, console.log('Entering Password...')
5. default export the component.
*/
  
import React from "react";

function Keypad (){
     function handlePassword(){
         console.log('Entering password...')
     }
    return <input  onChange={handlePassword}   type = "password" placeholder="Enter password Here" name="password"></input>
}

 export default Keypad


