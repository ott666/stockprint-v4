import React from "react";
import Button from "@/components/components/Button";
import CardHero from "./CardHero";


export default function HeroSection(){
    return(


        <div className={`
        h-screen
        w-full        
            flex 
            flex-col items-center justify-start
            md:flex-row-reverse md:justify-between
        py-0
        px-0 lg:px-0
        pt-28
         
         md:pb-0
        `}>
            <div className={`
            h-full
            w-full
            flex justify-center
            relative
            
            overflow-hidden
            `}>
                <img src="logos/logo.svg" className="w-full px-1 md:pt-1 z-10"></img>

                <div className={`
                absolute  w-[1920px]  h-auto`}>
                    <div className="h-full w-full absolute bg-black/30 inset-0"></div>
                    <video autoPlay muted loop src="/video/video1.mp4"></video>
                </div>
            </div>
            <div className="w-full px-2 py-2  bg-gradienteAzulRisk h-full flex flex-col justify-center items-center ">
            <CardHero/>        
            </div>
        </div>
    )
}