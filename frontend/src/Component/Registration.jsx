import React from 'react'
import img from './new.png'
function Registration() {
  return (
        <div className='min-h-screen-xl h-96 bg-slate-300 flex flex-col md:flex-row text-slate-100 text-xl'>
        <div className='w-full  md:w-1/3   bg-amber-300'>
       <img src={img} alt="" className='h-full' />
        </div>
    
        <div className='w-full md:w-2/3  bg-slate-900'>
    <h1 className='text-4xl '> Register here </h1>
     
    <label className="input my-3 input-bordered flex items-center gap-2">
      Name
      <input type="text" className="grow" placeholder=" " />
    </label>
    <label className="input input-bordered flex items-center gap-2">
      Contact
      <input type="number" className="grow" placeholder=" " />
    </label>
    <label className="input input-bordered flex items-center gap-2">
      Date of Birth
      <input type="date" className="grow" placeholder=" " />
    </label>
    
    <label className="input input-bordered flex items-center gap-2">
      Email
      <input type="email" className="grow" placeholder=" " />
    </label>
    <label className="input input-bordered flex items-center gap-2">
      password
      <input type="password" className="grow" placeholder=" " />
    </label>
    <label className="input input-bordered flex items-center gap-2">
      Address
      <input type="text" className="grow" placeholder=" " />
    </label>
       
         </div>
        </div>
      )
    }
    

export default Registration