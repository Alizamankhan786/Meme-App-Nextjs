import Image from 'next/image';
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
        return(
          <Image key={item.id} src={item.url} width={300} height={300} alt='meme'/>
        )
      })}
    </div>
    </div>
    </>
  )
}

export default page