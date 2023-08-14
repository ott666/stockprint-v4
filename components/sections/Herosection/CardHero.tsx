import React from "react";
import Button from "@/components/components/Button";
import ButtonWhite from "@/components/components/ButtonWhite";

export default function CardHero(){
    return(
        <div className={`
        w-full max-w-[400px] sm:max-w-[550px]
        h-fit
        rounded-[40px]
        px-[20px]
        py-[30px]
        flex flex-col
        gap-4
        bg-white/20
        `}>
            <h1 className={`
            text-white
            text-[35px] sm:text-5xl
            
            leading-8
            font-bold
            `}>Referência em identificação</h1>
        
            <p className={`
            text-white
            text-xl sm:text-2xl   font-bold
            `}>Há mais de 17 anos, a Stockprint é líder em identificação, oferecendo soluções inovadoras e confiáveis para empresas de diversos segmentos.
            </p>
            <div className={`
            flex items-center
            gap-5
            w-full
            
            `}>
                <Button>Impressoras</Button>
                <ButtonWhite>Serviços</ButtonWhite>
            </div>
            
        </div>
    )
}