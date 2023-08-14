'use client'
import React from "react";
import Servicos from "@/data/services.json"
import Container from "@/components/components/Container";
import Breadcrumb3 from "@/components/components/Breadcrumb3/Breadcrumb3";
import Image from "next/image";
import TransitionEffect from "@/components/layoutComponents/TransitionEffect/TransitionEffect";

export default function Page({params}:any){
    const servico = Servicos.find(({ url }) =>  url === params.url)
    
    return(
        <> 
        <TransitionEffect/>
        <Breadcrumb3 props={servico}/>
        
        <Container>
        <div className={`
        flex flex-col justify-start lg:flex-row 
        
        h-fit 
        py-5 
        gap-y-2
        lg:gap-x-5
        `}>
            <div className="h-fit flex relative lg:w-[40%]">
                <Image src={params.bg}  width={1000} height={1000} alt="bg" />
            </div>
            <div className="flex flex-col gap-y-2 lg:w-[60%]"> 
                <p className={`
                text-black sm:text-lg
                `}>{params.t1}</p>
                <p className={`
                text-black  sm:text-lg
                `}>{params.t2}</p>
              
            </div>
        </div>
        </Container>
        </>
    )
}