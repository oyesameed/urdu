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
    <div className='flex-col h-ful absolute text-white-1 px-8 md:px-16 flex bg-gray-1 w-full gap-8 md:gap-16 items-center'>
      
      {/* Header */}
      <div className='flex items-center flex-row-reverse justify-between w-full py-4'>
        <div className={`text-lg font-['Divangiry'] relative`}>ت خ ی ل</div>
        <div className='text-gray-1'>About</div>
      </div>

      {/* Menu */}
      <div className='flex items-end md:border-b border-white-2 border-opacity-20 md:items-center flex-col md:flex-row-reverse md:justify-between w-full'>
        
        {/* Input */}
        <input name='text' placeholder='یہاں ٹائپ کریں' className='py-1 text-right h-auto md:px-6 bg-gray-1 w-full placeholder:text-white-2 placeholder:text-opacity-20 outline-none box-border text-lg rounded-sm align-middle text-white-2 border-b border-white-2 border-opacity-30 md:border-opacity-0  focus:border-opacity-20 ' type="text" onChange={onChange} value={value}/> 
        
        {/* Color picker */}
        <button className="w-fit inline-block md:w-auto text-md bg-gray-1 border border-gray-5 rounded-full px-8 py-1 mt-2" onClick={() => toggle(!isOpen)}>Color</button>
      </div>
        
      {/* Selector */}
      {isOpen ? <HexColorPicker color={color} onChange={setColor} /> : ""}
      
      {/* Inner */}
      <div className='items-center flex w-full flex-col'>
        
        {/* Display fonts */}
        <div className='mt-20 flex text-right flex-col overflow-y-auto w-full h-full'>
          <div className='flex items-center flex-row-reverse justify-between w-full border-b-gray-5 py-4 border-b'>
            
            {/* Text */}
            <div 
              style={{color: color}} 
              className={`text-h1 cursor-pointer truncate font-['Qamri']`} 
              onClick={() => download("Qamri", value, color)}>
                {value}
            </div>
            
            {/* Actions */}
            <div className='flex gap-2'>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
              </span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </span>
            </div>
          </div>
          <div style={{color: color}} className={`text-h1 cursor-pointer border-b-gray-5 py-4 border-b truncate font-['Divangiry']`} onClick={() => download("Divangiry", value, color)}>{value}</div>
          <div style={{color: color}} className={`text-h1 cursor-pointer border-b-gray-5 py-4 border-b truncate font-['Tasmeem']`} onClick={() => download("Tasmeem", value, color)}>{value}</div>
          <div style={{color: color}} className={`text-h1 cursor-pointer border-b-gray-5 py-4 border-b truncate font-['Kamran']`} onClick={() => download("Kamran", value, color)}>{value}</div>
          <div style={{color: color}} className={`text-h1 cursor-pointer border-b-gray-5 py-4 border-b truncate font-['Abuzar']`} onClick={() => download("Abuzar", value, color)}>{value}</div>
          <div style={{color: color}} className={`text-h1 cursor-pointer border-b-gray-5 py-4 border-b truncate font-['Sadaf']`} onClick={() => download("Sadaf", value, color)}>{value}</div>
          <div style={{color: color}} className={`text-h1 cursor-pointer border-b-gray-5 py-4 border-b truncate font-['Ubaid']`} onClick={() => download("Ubaid", value, color)}>{value}</div>
          <div style={{color: color}} className={`text-h1 cursor-pointer border-b-gray-5 py-4 border-b truncate font-['Tehreeri']`} onClick={() => download("Tehreeri", value, color)}>{value}</div>
          <div style={{color: color}} className={`text-h1 cursor-pointer border-b-gray-5 py-4 border-b truncate font-['Qalm']`} onClick={() => download("Qalm", value, color)}>{value}</div>
          <div style={{color: color}} className={`text-h1 cursor-pointer border-b-gray-5 py-4 border-b truncate font-['Shekastah']`} onClick={() => download("Shekastah", value, color)}>{value}</div>
        </div>
      </div>
    </div>
  )
}

// Export
export default Home;
