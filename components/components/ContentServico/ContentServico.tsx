import React from "react";
import Image from "next/image";
export default function ContentServico(props:any){
    console.log(props,'contnttttttt')
    return(
        <>
        <div className="h-fit flex relative lg:w-[40%]">
                <Image src={props.servico.bg}  width={1000} height={1000} alt="bg" />
            </div>
            <div className="flex flex-col gap-y-2 lg:w-[60%]"> 
                <p className={`
                text-black sm:text-lg
                `}>{props.servico.t1}</p>
                <p className={`
                text-black  sm:text-lg
                `}>{props.servico.t2}</p>
        </div>
        </>
    )

}