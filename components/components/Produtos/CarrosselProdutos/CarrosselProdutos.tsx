import React from 'react'
import {Carousel} from 'react-responsive-carousel'

export default function CarrosselProdutos(props:any){
    console.log(props,'carousellllll')
        const fotosProduto = [
            
                [`/${props.produto.pseudo}/${props.produto.pseudo}1.png`],
                [`/${props.produto.pseudo}/${props.produto.pseudo}2.png`],
                [`/${props.produto.pseudo}/${props.produto.pseudo}3.png`],
                [`/${props.produto.pseudo}/${props.produto.pseudo}5.png`],
                [`/${props.produto.pseudo}/${props.produto.pseudo}4.png`],
            
        ]
    
    return(
        <div>
             <Carousel>
            {fotosProduto.map((produto)=>(
                <div key={props.produto.pseudo} className="bg-cover">
                    <img src={`${produto}`} alt={`${produto}`}/>
                </div>
            ))}
            </Carousel>
        </div>
    )
}