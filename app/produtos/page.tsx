'use client'

import Container  from "@/components/components/Container";
import ListaProdutos from "@/components/components/Produtos/GridProdutos/GridProdutos";
import React from "react";
import GenerosProdutos from "@/components/components/Produtos/GenerosProdutos/GenerosProdutos";
import { useState } from "react";
import Breadcrumb2 from "@/components/components/Breadcrumb2/Breadcrumb2";
import TransitionEffect from "@/components/layoutComponents/TransitionEffect/TransitionEffect";
export default function Page(){
    const [selectedGenre, setSelectedGenre] = useState("");
    return (
      <section className="bg-blue-600">

        <TransitionEffect/>
        <Breadcrumb2 props='Produtos'/>

        <Container>
        <div className="flex flex-col w-full justify-center items-center pb-2 lg:pb-8">
          <div className="w-full flex justify-center pb-5">
              <GenerosProdutos
                selectedGenre={selectedGenre}
                onSelect={setSelectedGenre}
              />
            </div>
            
            
              <ListaProdutos selectedGenre={selectedGenre} />
        </div>
          
        </Container>

    </section>

    )
}