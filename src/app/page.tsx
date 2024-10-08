import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Meme {
  id: string;
  name: string;
  url: string;
}



const page = async () => {

  const data = await fetch(`https://api.imgflip.com/get_memes`);
  const response = await data.json()
  console.log(response.data.memes);
  
  return (
    <>
      <h1 className="text-center mt-5 font-serif text-3xl">MeMe-Generator-App</h1>
      <div className="container mx-auto mt-10">
        <div className="flex flex-wrap justify-center gap-6">
          {response.data.memes.map((item : Meme) => (
            <div 
              key={item.id} 
              className="flex flex-col justify-between max-w-sm bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                <Image 
                  src={item.url} 
                  width={200} 
                  height={200} 
                  alt="meme" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow"></div> 
              <div className="p-4">
                <button className="w-full text-white font-bold py-2 px-4 rounded-md transition-all duration-300 ease-in-out bg-gradient-to-r from-red-400 to-red-700 hover:from-red-500 hover:to-red-600 shadow-md">
                  <Link href={{
                    pathname: "Meme",
                    query: {
                      url: item.url,
                      id: item.id,
                    },
                  }}>
                    Generate Meme
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default page;