'use client'
import Breadcrumb2 from "@/components/components/Breadcrumb2/Breadcrumb2";
import ContatoSection from "@/components/sections/ContatoSection/ContatoSection";
import Container  from "@/components/components/Container";
import TransitionEffect from "@/components/layoutComponents/TransitionEffect/TransitionEffect";
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