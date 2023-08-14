'use client'
import React from "react"
import Breadcrumb from "@/components/components/Breadcrumb/Breadcrumb"
import Produtos from '@/data/products.json'
import Container  from "@/components/components/Container"
import TransitionEffect from "@/components/layoutComponents/TransitionEffect/TransitionEffect"
import ProductDetails from "@/components/components/Produtos/ProductDetails/ProductDetails"
import Image from "next/image"
import ContentRibb from "@/components/components/ContentRibb/ContentRibb"
export default function Page({params}:any){
  const produto = Produtos.find(({ pseudo }) =>  pseudo === params.pseudo)
  console.log(produto,'rrrrrrrrrr')
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
          <ContentRibb produto={produto}/>
        </div>
        </Container>
        </>
    
  
  )
}