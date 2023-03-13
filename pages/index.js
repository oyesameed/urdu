// Home page of the app

// Imports
import React, { useEffect, useState } from 'react';

// Png converter
var text2png = require('text2png');

// Color picker
import { HexColorPicker } from "react-colorful";

// Component defination
const Home = () => {

  // Value of input
  const [value, setValue] = useState("");

  // Color picker toggle
  const [isOpen, toggle] = useState(false);

  // Color
  const [color, setColor] = useState("#ededed");

  // On input change
  function onChange (e) {

    // Set value in state
    setValue(e.target.value);
  }

  useEffect(() => {
    
  }, [color]);

  function download(font, value, color) {

    // Create a link element
    const a = document.createElement("a");
    
    // Set the link URL and download filename
    a.href = text2png(value, { 
      font: '500px '+ font,
      localFontName: font,
      color: color,
      output: 'dataURL'
    });
    
    // Download
    a.download = `${font}.png`;
    
    // Click the link programmatically to trigger the download
    a.click();
  }
  
  return (
    <div className='flex-col text-white-1 flex bg-gray-1 w-full h-full gap-8 md:gap-16 items-center'>
      
      {/* Header */}
      <div className='text-title font-abuzar relative'>تخیل</div>
      
      {/* Inner */}
      <div className='px-2 items-center flex justify-center w-full flex-col'>

        {/* Input */}
        <input name='text' className='py-1 text-right h-auto md:px-6 bg-gray-2 md:w-3/6 placeholder:text-white-2 outline-none box-border text-lg rounded-sm align-middle text-white-2 border border-white-2 border-opacity-10 focus:border-opacity-20 ' type="text" onChange={onChange} value={value}/>
          
        {/* Color picker */}
        <button className="rounded-sm w-full md:w-auto text-lg bg-gray-3 px-8 py-1 mt-2" onClick={() => toggle(!isOpen)}>رنگ</button>

        {/* Selector */}
        {isOpen ? <HexColorPicker color={color} onChange={setColor} /> : ""}
        
        {/* Display fonts */}
        <div className='mt-20 flex text-right flex-col items-center overflow-y-auto w-full h-full'>
          <div style={{color: color}} className={`text-h1 cursor-pointer border-b-gray-5 py-4 border-b truncate w-3/4 font-['Qamri']`} onClick={() => download("Qamri", value, color)}>{value}</div>
          <div style={{color: color}} className={`text-h1 cursor-pointer border-b-gray-5 py-4 border-b truncate w-3/4 font-['Divangiry']`} onClick={() => download("Divangiry", value, color)}>{value}</div>
          <div style={{color: color}} className={`text-h1 cursor-pointer border-b-gray-5 py-4 border-b truncate w-3/4 font-['Tasmeem']`} onClick={() => download("Tasmeem", value, color)}>{value}</div>
          <div style={{color: color}} className={`text-h1 cursor-pointer border-b-gray-5 py-4 border-b truncate w-3/4 font-['Kamran']`} onClick={() => download("Kamran", value, color)}>1{value}</div>
          <div style={{color: color}} className={`text-h1 cursor-pointer border-b-gray-5 py-4 border-b truncate w-3/4 font-['Abuzar']`} onClick={() => download("Abuzar", value, color)}>{value}</div>
          <div style={{color: color}} className={`text-h1 cursor-pointer border-b-gray-5 py-4 border-b truncate w-3/4 font-['Sadaf']`} onClick={() => download("Sadaf", value, color)}>{value}</div>
          <div style={{color: color}} className={`text-h1 cursor-pointer border-b-gray-5 py-4 border-b truncate w-3/4 font-['Ubaid']`} onClick={() => download("Ubaid", value, color)}>{value}</div>
          <div style={{color: color}} className={`text-h1 cursor-pointer border-b-gray-5 py-4 border-b truncate w-3/4 font-['Tehreeri']`} onClick={() => download("Tehreeri", value, color)}>2{value}</div>
          <div style={{color: color}} className={`text-h1 cursor-pointer border-b-gray-5 py-4 border-b truncate w-3/4 font-['Qalm']`} onClick={() => download("Qalm", value, color)}>3{value}</div>
          <div style={{color: color}} className={`text-h1 cursor-pointer border-b-gray-5 py-4 border-b truncate w-3/4 font-['Shekastah']`} onClick={() => download("Shekastah", value, color)}>{value}</div>
        </div>
      </div>
    </div>
  )
}

// Export
export default Home;
