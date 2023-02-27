// Home page of the app

// Imports
import React, { useState } from 'react';
var text2png = require('text2png');

// Component defination
const Home = () => {

  // Value of input
  const [value, setValue] = useState("");

  // On input change
  function onChange (e) {

    // Set value in state
    setValue(e.target.value);
  }

  function download(font, value) {

    // Create a link element
    const a = document.createElement("a");
    
    // Set the link URL and download filename
    a.href = text2png(value, { 
      font: '500px '+ font,
      localFontName: font,
      color: 'white',
      output: 'dataURL'
    });
    
    // Download
    a.download = `${font}.png`;
    
    // Click the link programmatically to trigger the download
    a.click();
  }
  
  return (
    <div className='absolute flex-col flex bg-gray-1 w-full h-screen gap-16 items-center'>
      
      {/* Header */}
      <div className='text-title text-white-1 font-qamri'>تخیل</div>
      
      <div className='items-center flex justify-center w-full flex-col'>
        {/* Input */}
        <input name='text' className='py-3 text-right h-12 px-6 bg-gray-2 w-3/6 placeholder:text-white-2 outline-none box-border text-lg rounded-sm align-middle text-white-2 border border-white-2 border-opacity-10 focus:border-opacity-20 ' type="text" onChange={onChange} value={value}/>
        
        {/* Display fonts */}
        <div className='mt-20 flex flex-col items-center overflow-scroll w-full h-96'>
          <div className='text-h1 text-white-1 font-qamri cursor-pointer' onClick={() => download("Qamri", value)}>{value}</div>
          <div className='text-h1 text-white-1 font-divangiry cursor-pointer' onClick={() => download("Divangiry", value)}>{value}</div>
          <div className='text-h1 text-white-1 font-tasmeem cursor-pointer' onClick={() => download("Tasmeem", value)}>{value}</div>
          <div className='text-h1 text-white-1 font-kamran cursor-pointer' onClick={() => download("Kamran", value)}>{value}</div>
          <div className='text-h1 text-white-1 font-abuzar cursor-pointer' onClick={() => download("Abuzar", value)}>{value}</div>
          <div className='text-h1 text-white-1 font-sadaf cursor-pointer' onClick={() => download("Sadaf", value)}>{value}</div>
          <div className='text-h1 text-white-1 font-ubaid cursor-pointer' onClick={() => download("Ubaid", value)}>{value}</div>
          <div className='text-h1 text-white-1 font-tehreeri cursor-pointer' onClick={() => download("Tehreeri", value)}>{value}</div>
          <div className='text-h1 text-white-1 font-qalam cursor-pointer' onClick={() => download("Qalm", value)}>{value}</div>
          <div className='text-h1 text-white-1 font-shekastah cursor-pointer' onClick={() => download("Shekastah", value)}>{value}</div>
        </div>
      </div>
    </div>
  )
}

// Export
export default Home;
