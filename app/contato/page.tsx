'use client'
import Breadcrumb2 from "@/components/Breadcrumb2/Breadcrumb2";
import ContatoSection from "@/components/Sections/ContatoSection/ContatoSection";
import Container  from "@/components/Container/Container";
import TransitionEffect from "@/components/LayoutComponents/TransitionEffect/TransitionEffect";
import React from "react";

export default function Page(){
    return(
        <>
        <TransitionEffect />
        <div className=" flex flex-col items-center">
            <Breadcrumb2 props='Contato'/>
            <TransitionEffect />
            
            <ContatoSection/>
            
        </div>
        
        </>
        
    )
}