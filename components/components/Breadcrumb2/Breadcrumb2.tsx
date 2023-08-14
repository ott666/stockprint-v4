import React from 'react'



const Breadcrumb2 = (props:any) => {
    return (
        
        
    <div className='font-sans capitalize w-full h-[70vh] flex items-center justify-center relative'>
        <div className='w-full h-[100%] absolute bg-cover bg-fixed bg-center z-[0] '
            style={{
                backgroundImage:`linear-gradient(rgba(27, 47, 69, 0.8), rgba(27, 47, 69, 0.8)), url('/bgBreadcrumb2.jpg')`,
                
            }}
            
        
    >            
        </div>
        <div className='absolute z-1'>
        <h1 className='text-white text-7xl font-bold'>{props.props}</h1>

        </div>
    </div>
    
    
 
  )
}

export default Breadcrumb2