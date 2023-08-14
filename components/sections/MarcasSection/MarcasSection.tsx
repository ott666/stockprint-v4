import Container from "@/components/components/Container";
import React from "react";
import Image from "next/image";
export default function MarcasSection(){
    return(
        <section className="h-fit bg-blue-600">
        <Container>
        <h1 className={`
            text-center text-white
            text-4xl sm:text-6xl py-5
            font-bold
            `}>Nossos fornecedores</h1>
            <div className={`
            w-full
            flex flex-wrap
            h-[70vh] md:h-[50vh]
            gap-2
            py-5
            `}>
                <div className="relative w-[100%] h-[24%] md:h-[49%]  md:w-[49%] bg-white rounded-[40px]">
                    <Image fill={true} alt='logo' src={'/logos/hid2.svg'}></Image>
                </div>
                <div className="relative w-[100%] h-[24%] md:h-[49%] md:w-[49%] bg-white rounded-[40px]">
                    <Image fill={true} alt='logo' src={'/logos/entrust2.svg'}></Image>
                </div>
                <div className="relative w-[100%] h-[24%] md:h-[49%] md:w-[49%] bg-white rounded-[40px]">
                    <Image fill={true} alt='logo' src={'/logos/evolis2.svg'}></Image>
                </div>
                <div className="relative w-[100%] h-[24%] md:h-[49%] md:w-[49%] bg-white rounded-[40px]">
                    <Image fill={true} alt='logo' src={'/logos/zebra2.svg'}></Image>
                </div>

            </div>
        </Container>
        </section>
    )
}