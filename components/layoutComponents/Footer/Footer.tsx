import React from 'react'
import Container  from '@/components/components/Container'

const Footer = () => {
  
  
    return (
        <div className='w-full bg-blue-700'>
        <Container>
        <div className={`
        flex flex-col md:flex-row md:justify-between lg:justify-around
        md:gap-5
        pt-3
        h-fit text-white font-sans  items-start w-full`
        
        
        }>
            
            
            <div className={`
            flex flex-col  
            
            w-full md:max-w-[420px] 
            h-full
             `}>
                    <a href='#' className=' text-4xl md:text-lg lg:text-2xl font-bold md:pt-1'>Stockprint</a>
                    <p className='pt-[15px] md:pt-0 text-xl md:text-sm  font-bolder text-justify'>
                        Há mais de 17 anos, a Stockprint é líder no mercado de identificação, oferecendo soluções inovadoras e confiáveis para empresas de diversos segmentos.
                    </p>
            </div>


            <div className='flex w-full lg:max-w-fit flex-col pt-5 md:pt-1 lg:pb-5'>
                <h4 className='text-2xl md:text-lg font-bold'>Endereço</h4>
                <p className='
                
                font-semibold
                text-xl md:text-sm '>Rua Rangel Pestana, 547 - 14030-210</p>
                <p className='
                py-0 
                font-semibold
                text-xl md:text-sm '>Ribeirão Preto, São Paulo - Brasil</p>
          

                <p className='self-start pt-3 text-xl md:text-sm py-2'><strong>Telefone:</strong> +16 3237-8150</p>
                <p className='self-start  text-xl md:text-sm  '> vendas2@stockprint.com.br</p>

                
            </div>
            
            <div className='flex flex-row-reverse  w-full lg:max-w-[230px]  justify-between mm:justify-around sm:justify-around md:justify-around lg:justify-between pt-5  md:pt-1 '>
            
            
                <div className='flex flex-col h-full'>
                    <h4 className='text-xl md:text-lg  font-bold '>Links</h4>
                    <ul className='font-semibold
                    text-xl md:text-sm '>
                    <li className='py-2'> <a href="/">Home</a></li>
                    <li className='py-2'> <a href="/servicos">Serviços</a></li>
                    <li className='py-2'> <a href="/contato">Contato</a></li>
                    <li className='py-2'> <a href="/sobre">Sobre</a></li>
                    </ul>
                </div>
                
                
                <div className='flex flex-col h-full'>
                    <h4 className='text-xl md:text-lg  font-bold '>Produtos</h4>
                    <ul className='font-semibold
                    text-xl md:text-sm  '>
                    <li className='py-2'> <a href="/produtos">- Impressoras</a></li>
                    <li className='py-2'> <a href="/produtos">- Ribbons</a></li>
                    <li className='py-2'> <a href="/produtos">- Limpeza</a></li>
                    <li className='py-2'> <a href="/produtos">- Etiquetas</a></li>
                    </ul>
                </div>

            </div>
        
    </div>
    </Container>
    </div>
  )
}

export default Footer