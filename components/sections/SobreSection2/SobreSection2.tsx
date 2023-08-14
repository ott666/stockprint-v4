import Container from "@/components/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function SobreSection2(){
    return(
        <section className="bg-blue-600 pt-5 xl:pt-5 3xl:pt-0">
       <Container>
       <h1 className={`
                text-6xl font-bold text-center xl:pt-8 xl:pb-5 3xl:pt-5 3xl:pb-0 
                `}>Parceiros HID </h1>
            <div className={`
                    flex flex-col md:flex-row 
                    md:items-start
                    h-fit
                    bg-transparent
                    justify-between
                    mm:gap-5
                    mm:py-5
                    
                `}>
                
                <div className={`
                    w-full md:w-[60%]  lg:w-[50%]
                    bg-white/10
                    rounded-3xl
                    h-fit lg:h-fit xl:h-[575px]
                    py-3 lg:pt-[15px] xl:pt-[30px] 
                    px-1 lg:px-2 3xl:px-5
                    flex flex-col
                    
                    gap-3 lg:gap-[25px]
                    `}>
                        <h2 className={`
                            text-xl mm:text-2xl sm:text-3xl lg:text-4xl
                            font-bold
                            text-justify lg:text-start 3xl:text-start
                            -tracking-wider
                            px-1
                            lg:pl-3
                            `}>
                                A Stockprint tem a satisfação de estabelecer uma parceria sólida com a HID Global, uma líder global em soluções de segurança e identificação</h2>
                        <h2 className={`
                            text-xl mm:text-2xl sm:text-3xl lg:text-4xl
                            font-bold
                            text-justify lg:text-start 3xl:text-start
                            -tracking-wider
                            px-1
                            lg:pl-3
                            3xl:pt-5
                            `}>
                                Como distribuidores, unimos a expertise da StockPrint em oferecer soluções de alta qualidade às inovações inigualáveis da HID Global.</h2>
                        <button className={`
                                self-center
                                text-4xl sm:text-5xl
                                font-bold
                                tracking-widest md:-tracking-wider
                                bg-red-500
                                w-[95%] mm:w-[80%] sm:w-[83%] lg:w-[80%] 3xl:w-full
                                rounded-2xl
                                py-3 lg:py-5
                                mb-2 lg:mb-4
                                3xl:mt-5

                            `}>
                            <Link href='https://www.hidglobal.com/partners/stockprint-2913' >Saiba mais</Link>
                        </button>
                </div>

                <div className={`
                    relative
                     w-full md:w-[40%] lg:w-[50%]
                     bg-no-repeat
                     bg-top
                     min-h-[300px] mm:min-h-[400px] sm:min-h-[500px] lg:min-h-[575px] 
                     md:h-[300px] 
                     

                    
                `}>
                        <div className="bg-hidlogo absolute inset-0 bg-no-repeat bg-top"></div>
                    </div>         
            </div>
        </Container>
        </section>
    )
}