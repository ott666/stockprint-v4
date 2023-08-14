import React from "react";


export default function LiProductDetails(props:any){
    console.log(props,'liiiiiiiii')
    return(

        <div className=" flex flex-col items-center ">
            <ul>
        {props.produto.descriptions.map((description:any)=>(
            <li key={description}><p>{description}</p> <br></br></li>
        ))}
            </ul>
        </div>

    )
}