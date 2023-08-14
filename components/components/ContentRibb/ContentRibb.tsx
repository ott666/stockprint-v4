import React from "react";
import Image from "next/image";
import LiProductDetails from "../Produtos/LiProductDetails/LiProductDetails";
export default function ContentRibb(props:any){
    console.log(props,'rib222')
    return(
        <>
         <div className="h-fit flex relative lg:w-[40%]">
                <Image src={`/${props.produto.pseudo}/${props.produto.pseudo}1.png`}  width={1000} height={1000} alt="bg" />
            </div>
            <div className="flex flex-col gap-y-2 lg:w-[60%] text-black"> 
                <LiProductDetails produto={props.produto}/>
              
            </div>
            </>
    )
}