'use client'
import React from "react"
import Breadcrumb from "@/components/components/Breadcrumb/Breadcrumb"
import Produtos from '@/data/products.json'
import Container  from "@/components/components/Container"
import TransitionEffect from "@/components/layoutComponents/TransitionEffect/TransitionEffect"
import ProductDetails from "@/components/components/Produtos/ProductDetails/ProductDetails"
export default function Page({params}:any){
  const produto = Produtos.find(({ pseudo }) =>  pseudo === params.pseudo)
  return (
    <>
    <TransitionEffect />
    <Breadcrumb produto={produto}/>
    <Container>
    <div className="h-screen">
      
    </div>
    </Container>
    </>
  
  )
}