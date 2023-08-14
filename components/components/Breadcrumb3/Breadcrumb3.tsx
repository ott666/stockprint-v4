import { url } from 'inspector'
import React from 'react'



const Breadcrumb3 = (props:any) => {
    return (
        <>
        
    <div className='font-sans capitalize w-full h-[70vh] flex items-center justify-center relative'>
        <div className='w-[100%] h-[100%] absolute bg-cover bg-fixed bg-center z-[-1] '
          style={{
            backgroundImage:`linear-gradient(rgba(27, 47, 69, 0.8), rgba(27, 47, 69, 0.8)), url('/bgBreadcrumb2.jpg')`,
            
        }}
        
    >            
        </div>
            <h1 className='text-white text-4xl text-center font-bold'>{`${props.props.h1}`}</h1>
    </div>
    
    
    </>
  )
}

export default Breadcrumb3