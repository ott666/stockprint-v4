'use client'
import React from "react";
import Servicos from "@/components/sections/ServicosSection/ServicosSection";
import TransitionEffect from "@/components/layoutComponents/TransitionEffect/TransitionEffect";

export default function Page(){
    return(
        <div className='w-full flex flex-col'>
            <TransitionEffect/>
            
            
            <Servicos/>
        </div>
    )
}