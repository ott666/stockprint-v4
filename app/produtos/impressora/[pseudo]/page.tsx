'use client'

import LiProductDetails from "@/components/components/Produtos/LiProductDetails/LiProductDetails"
import React from "react"
import Breadcrumb from "@/components/components/Breadcrumb/Breadcrumb"
import Produtos from '@/data/products.json'
import Container  from "@/components/components/Container"
import TransitionEffect from "@/components/layoutComponents/TransitionEffect/TransitionEffect";
import Image from "next/image"
export default function Page({params}:any){
  const produto = Produtos.find(({ pseudo }) =>  pseudo === params.pseudo)
  console.log('produto' , produto)
  const fotosProduto = [
        
    [`/${params.pseudo}/${params.pseudo}1.png`],
    [`/${params.pseudo}/${params.pseudo}2.png`],
    [`/${params.pseudo}/${params.pseudo}3.png`],
    [`/${params.pseudo}/${params.pseudo}4.png`],
    [`/${params.pseudo}/${params.pseudo}5.png`]

]
  
  return (
    <> 
        <TransitionEffect/>
        <Breadcrumb produto={produto}/>
        
        <Container>
        <div className={`
        flex flex-col justify-start lg:flex-row 
        
        h-fit 
        py-5 
        gap-y-2
        lg:gap-x-5
        `}>
            <div className="h-fit flex relative lg:w-[40%]">
                <Image src={`/${params.pseudo}/${params.pseudo}1.png`}  width={1000} height={1000} alt="bg" />
            </div>
            <div className="flex flex-col gap-y-2 lg:w-[60%] text-black"> 
                <LiProductDetails produto={produto}/>
              
            </div>
        </div>
        </Container>
        </>
  )
}