'use client'

import React from "react"
import Breadcrumb from "@/components/components/Breadcrumb/Breadcrumb"
import Produtos from '@/data/products.json'
import Container  from "@/components/components/Container"
import TransitionEffect from "@/components/layoutComponents/TransitionEffect/TransitionEffect";
import { Carousel } from "react-responsive-carousel"

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
    <TransitionEffect />
    
    <Breadcrumb produto={produto}/>
    <Container>
      <div>
      <Carousel>
            {fotosProduto.map((produtoFoto)=>(
                <div key={params.pseudo} className="bg-cover">
                    <img src={`${produtoFoto}`} alt={`${produtoFoto}`}/>
                </div>
            ))}
            </Carousel>
      </div>
    </Container>
    </>
  
  )
}