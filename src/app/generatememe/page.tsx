"use client"

import Image from 'next/image';
import React, { useRef, useState } from 'react'

const GenerateMeme = ( {searchParams}: {searchParams: {id: string; url: string}}) => {

        const [meme , setMeme] = useState <string | null>();
        const text1Val = useRef<HTMLInputElement> (null);
        const text2Val = useRef<HTMLInputElement> (null);

        const creatememe = async (event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        console.log(text1Val.current?.value);
        console.log(text2Val.current?.value);

        const data = await fetch(`https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=MuhammadAliZaman&password=alizaman99&text0=${text1Val.current?.value}&text1=${text2Val.current?.value}` , {
        method: 'POST',
    })
        const response = await data.json();
        console.log(response)
        setMeme(response.data.url);

    }


  return (
    <>
    <h1 className='text-center mt-5 font-bold text-3xl'>Generate MeME</h1>
    <div className='text-center mt-3 flex justify-center items-center'>
    <Image 
      src={searchParams.url} 
      width={300} 
      height={300} 
      alt="meme" 
    />
    </div>

    <form className='text-center mt-3 ' onSubmit={creatememe}>
    <br />
    <input type="text" placeholder="Text 1" className="input input-bordered w-full max-w-xs" ref={text1Val} /> <br /> <br />
    <input type="text" placeholder="Text 2" className="input input-bordered w-full max-w-xs" ref={text2Val} /> <br /> <br />
    <button type='submit' className="btn btn-active btn-primary">Create Meme</button>
    <br />

    </form>

    {meme ? <div className='flex justify-center item-center mt-7'>
      <Image src={meme} width={300} height={300} alt='meme'/>
      </div>:null
    }
    </>
  )
}

export default GenerateMeme;

