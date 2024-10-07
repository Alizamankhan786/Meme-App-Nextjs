"use client"

import Image from 'next/image';
import React, { useRef, useState } from 'react'

const GenerateMeme = ( {searchParams}: {searchParams: {id: string; url: string}}) => {

        const [meme , setMeme] = useState <string | null>(null);
        const memeUrl1 = useRef<HTMLInputElement> (null);
        const memeUrl2 = useRef<HTMLInputElement> (null);

        const creatememe = async(event: React.FormEvent<HTMLFormElement> ) => {
            event.preventDefault();
            console.log(memeUrl1.current?.value);
            console.log(memeUrl2.current?.value);

            const data = await fetch(`https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=MuhammadAliZaman&password=123456789&text0=${memeUrl1.current?.value}&text1=${memeUrl2.current?.value}` , {
            method: 'POST'
        })
        const response = await data.json()
        console.log(response);
        setMeme(response.data.url)

    }
  return (
    <>
    <h1>Generate MeME</h1>
    <Image 
      src={searchParams.url} 
      width={300} 
      height={300} 
      alt="meme" 
    />

    <form onSubmit={creatememe}>
    <input type="text" placeholder="Text 1" className="input input-bordered w-full max-w-xs" ref={memeUrl1} />
    <input type="text" placeholder="Text 2" className="input input-bordered w-full max-w-xs" ref={memeUrl2} />
    <button className="btn btn-active btn-primary">Create Meme</button>

    </form>

    { meme ? <Image 
      src={meme} 
      width={300} 
      height={300} 
      alt="meme" 
    /> : null} 
    </>
  )
}

export default GenerateMeme;