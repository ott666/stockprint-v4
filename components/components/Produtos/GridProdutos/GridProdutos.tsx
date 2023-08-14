// import ListaProdutos

import produtosData from "@/data/products.json";
import Link from "next/link";
import Cardbundle from "@/components/components/Produtos/CardBundle/CardBundle";


type Props = {
  selectedGenre?: string;
};

const ListaProdutos = ({ selectedGenre }: Props) => {
  // Lines 9-11 if there's a selectedGenre we use the array.filter function to filter the product data
  // otherwise, return all the ListaProdutos.
  const filteredMoviesByGenre = selectedGenre
    ? produtosData.filter((product) => product.genre.includes(selectedGenre))
    : produtosData;
  return (
    <div className={`
    w-full flex flex-wrap justify-center  md:justify-around xl:justify-between
    gap-y-5
    
    `}>
      {/* map through all the filtered ListaProdutos */}
      {filteredMoviesByGenre.map((product) => {
       
        return (
          
            <Cardbundle 
            imgPath={`/${product.pseudo}/${product.pseudo}1.png`} 
            alt={product.title}
            title={product.title}
            subtitle={product.subt}
            subtitle2={product.subt2}
            bgColor="#ffffff"
            genre={product.genre}
            pseudo={product.pseudo}
            key={product.pseudo}
            url={product.url}
          / >
          
        );
      })}
    </div>
  );
};
export default ListaProdutos;