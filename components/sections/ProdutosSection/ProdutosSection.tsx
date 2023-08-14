'use client'
import { useState } from "react";
import GenerosProdutos from "@/components/components/Produtos/GenerosProdutos/GenerosProdutos";
import ListaProdutos from "@/components/components/Produtos/GridProdutos/GridProdutos";
import  Container  from "@/components/components/Container";

export default function ProdutosSection(props:any){
    const [selectedGenre, setSelectedGenre] = useState("");
    return(
      <section className="h-fit bg-blue-600">
        <h1 className={`
        text-center
        font-bold
        text-white
        text-5xl xl:text-6xl
        pt-10
        pb-2 xl:pb-5
        `}>Nossos produtos</h1>
        <Container>
        <div className="flex flex-col justify-center w-full relative items-center ">
          <div className="flex justify-center relative w-full px-9 md:px-0 pb-7">
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