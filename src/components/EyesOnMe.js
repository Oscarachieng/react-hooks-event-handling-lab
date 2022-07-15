// Code EyesOnMe Component Here
/*
1.Import React from react
2. render a button with " Eyes on Me"
3. Add focus and blur events,
4. onfocus, console.log("Good!")
5. onblur, console.log ("Hey!Eye on Me!")
6.Export default.
 */

import React from "react";
 
function EyesOnMe (){

    //  function handleFocus () {
    //      console.log('Good!')
    //  }
    //  function handleBlur () {
    //      console.log("Hey! Eyes on me!")
    //  }

    return <button onFocus={(() => console.log("Good!"))} onBlur = {(() => console.log("Hey! Eyes on me!"))}>Eyes on me</button>
}

export default EyesOnMe;