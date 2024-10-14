import React from 'react'
import image from './flower.jpeg'

function Banner() {
  return (
    <>
    <div className=' max-w-screen-2xl container mx-0 my-2 flex flex-col md:flex-row'>
    <div  className=' w-full bg-slate-400 text-left md:w-1/2'> <h1 className='text-3xl  text-center text-red-700'>Mid Left <br/>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio ut rem, culpa cumque saepe, recusandae minima ducimus quis repudiandae, qui nisi. Expedita quasi distinctio dolorem fuga! Perspiciatis soluta rerum facere. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, cupiditate? Aperiam aliquam ipsum amet nisi ipsa, dignissimos eaque necessitatibus et maiores. Vero ipsa recusandae rem, qui tenetur veritatis voluptate dolorem!</h1></div>
    <div className=' w-full bg-slate-600 text-left md:w-1/2'> <h1 className='text-3xl  text-center text-red-700'>Mid right
       <br/><img src={image} className='w-full h-30'/></h1></div>

    
    </div>
      </>
    
  )
}

export default Banner