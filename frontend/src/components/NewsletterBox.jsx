import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (e)=>{
        e.preventdefault();
    }
  return (
    <div className='text-center pt-12'>
      <p className='text-2xl font-medium to-gray-800'>Subscribe now & get 20% off</p>
      <p className='to-gray-400 mt-3'>Shop now and get more offer like free delivery.</p>

      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 ' >
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required/>
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox
