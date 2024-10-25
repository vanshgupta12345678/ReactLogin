import React, { Children } from "react";
export default function Button(Props)
{
    const{children}=Props
    return(

        <button >{children}</button>
    )

    
}