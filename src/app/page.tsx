import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Meme {
  id: string;
  url: string;
}



const page = async () => {

  const data = await fetch(`https://api.imgflip.com/get_memes`);
  const response = await data.json()
  console.log(response.data.memes);
  
  return (
    <>
    <h1 className='text-center mt-5 font-serif '>MeMe-Generator-App</h1>
    <div className="container mt-5 ">
    <div className="flex flex-wrap justify-center gap-5">
      {response.data.memes.map((item : Meme) => {
        return <div>
        <Image 
      src={item.url} 
      width={300} 
      height={300} 
      alt="meme" 
    />
    <Link
      href={{
        pathname: "creatememe",
        query: {
          url: item.url,
          id: item.id
        }
      }} 
      passHref
    >
      <br />
      <button 
      style={{
        padding: '12px 24px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'white',
        background: 'linear-gradient(135deg, #ff6b6b, #d90429)',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >Generate Meme</button>
  </Link>
   </div>
    })}
    </div>
    </div>
    </>
  )
}

export default page