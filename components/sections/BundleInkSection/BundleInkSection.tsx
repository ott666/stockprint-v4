import Container from "@/components/components/Container";
import Link from "next/link";
import Cardbundle from "@/components/components/Produtos/CardBundle/CardBundle";
import Produtos from "@/data/products.json"


export default function BundleInkSection(){
    const itensBundle=['ink1000','cartucho','software','cartaopvc']


    const result = Produtos.filter((produto)=>{
        return itensBundle.find((a)=>{
            return produto.pseudo === a
        })
    })

    console.log(result,'aaaaqui')
    return(
        <section id='bundle'className="bg-blue-600 h-fit ">
        <Container>
         <h1 className={`
         text-white
         xl:pt-5
         text-center
         font-bold
         text-6xl`}>Bundle INK1000</h1>
         <div className={`
         flex flex-col
         h-fit
         `}>
            <div className={`
            md:flex md:flex-row
            
            
`}>
            <div className={`
            relative
            h-[320px] mm:h-[450px] sm:h-[500px]
            w-full`}>
                <div className={`
                bg-ink1000card
                bg-contain md:bg-cover
                bg-center
                bg-no-repeat
                absolute
                inset-0
                xl:h-[900px]
                xl:mr-[50px]
                xl:translate-y-[-60px]
                `}>
                    <Link className={`
                text-sm xl:text-7xl
                invisible xl:visible
                bg-green-400
                text-zinc-100

                py-[40px]
                w-[80%]
                rounded-3xl
                translate-y-[100px]
                absolute
                right-[50%]
                translate-x-[50%]
                -tracking-wider
                font-bold text-center
                bottom-[0]`}
                href={'https://wa.me/5516992974070?text=Oi%2C+gostaria+de+mais+detalhes'}>Whatsapp</Link>
                </div>
                
            </div>
            
            <div className={`
            flex flex-col 
            md:pt-[40px]
            text-slate-200
            h-fit
            `}>
                <p className={`
                text-xl mm:text-2xl sm:text-3xl lg:text-4xl
                font-bold
                text-justify lg:text-start 3xl:text-start
                -tracking-wider
                px-1
                py-1
                `}>Confira nosso pacote completo com o melhor preço do mercado.
                </p>
                <p className={`
                 text-xl mm:text-2xl sm:text-3xl lg:text-4xl
                 font-bold
                 text-justify lg:text-start 3xl:text-start
                 -tracking-wider
                 px-1
                 pt-3
                 `}>Este pacote inclui: 
                 </p>
                <ul className={`
                 text-xl mm:text-2xl sm:text-3xl lg:text-4xl
                 font-bold
                 -tracking-wider
                 pl-5
                 pt-2
                 list-disc
                 `}>
                <li className={`
                py-1
                `}>1 Cartucho de tinta YMC</li>
                <li className={`
                py-1
                `}>Software de impressão Asure ID 7</li>
                <li className={`
                py-1
                `}>Impressora HID FARGO INK1000</li>
                 <li className={`
                py-1
                `}>100 cartões PVC branco</li>
              
                </ul>
                <button className={`
                text-4xl 
                font-bold
                py-3
                mt-2
                w-full lg:max-w-[95%]
                lg:self-center
                text-blue-500
                rounded-3xl
                bg-white
                `}>
                    <Link 
                    href={'/'}>R$5.300,00</Link>
                </button>
                
            </div>
            </div>
            <div className={`
                flex flex-wrap 
                xl:w-[620px]
                xl:self-end
                xl:translate-x-5
                

                justify-center
                gap-4 xl:gap-x-1 xl:gap-y-3
                xl:translate-y-[-40px]
                pt-5`}>
                   {result.map((itemBundle)=>{
                    return  <Cardbundle url={itemBundle.url} alt={itemBundle.pseudo} bgColor="white" pseudo={itemBundle.pseudo} genre={itemBundle.genre} imgPath={`/${itemBundle.pseudo}/${itemBundle.pseudo}1.png`} subtitle={itemBundle.subt} subtitle2={itemBundle.subt2} title={itemBundle.title} key={itemBundle.id}/>
                   })}

                </div>

         </div>
        </Container>
        </section>
    )
}