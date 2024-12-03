// Imports
import React, { useState } from 'react';
import text2png from 'text2png';
import { SwatchesPicker } from 'react-color';

// Import components
import Tile from '../ui/tile';

// Home component
const Home = () => {

    // List of available fonts
    const fonts = ["Qamri", "Divangiry", "Tasmeem", "Kamran", "Abuzar", "Sadaf", "Ubaid", "Tehreeri", "Qalm", "Shekastah"];

    // State to store user input text
    const [value, setValue] = useState("زندگی نہ ملیگی دوبارہ");

    // State to store the selected color
    const [color, setColor] = useState({ r: 0, g: 0, b: 0});

    // State to toggle of the color picker
    const [showColorPicker, setShowColorPicker] = useState(false);

    // Function to handle changes in the text input
    const onChange = (e) => setValue(e.target.value);

    // Function to generate and download the text image
    const download = async (font, value, color) => {

        // Check if the value is empty
        if (!value) return alert("Please enter text before downloading!");

        // Convert color object to RGBA string
        const rgbaColor = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;

        const a = document.createElement("a");
        a.href = text2png(value, {
            font: `500px ${font}`,
            localFontName: font,
            color: rgbaColor,
            output: 'dataURL',
        });
        a.download = `${value} - ${font}.png`;
        a.click();
    };

    // Convert RGB object to RGBA with specified opacity
    const rgbToRgba = (rgb, opacity) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;

    // Create lighter and darker shades of the selected color
    const lightColor = rgbToRgba(color, 0.1);
    const darkerColor = rgbToRgba(color, 0.8);

    return (
        <div className="flex flex-col md:overflow-hidden md:flex-row min-h-screen text-right" style={{ backgroundColor: lightColor }}>

            {/* Left Section */}
            <div className="flex-1 py-8 px-4 md:p-12 overflow-y-auto">
                
                {/* Title */}
                <h2 className="text-lg font-semibold mb-6 md:hidden" style={{ color: color }}>اردو</h2>

                {/* Text Input */}
                <div className="w-full flex flex-col mb-12">
                    
                    {/* Title */}
                    <p className="text-[1rem] mb-6" style={{ color: color }}>آپ جو چاہتے ہیں ٹائپ کریں۔</p>
                    
                    {/* Input Field */}
                    <input
                        name="text"
                        placeholder="یہاں لکھیں۔"
                        className="py-3 px-6 text-right w-full text-base border-[#000] border-[0.1px] border-opacity-20 rounded-lg shadow-sm focus:outline-none"
                        style={{
                            backgroundColor: '#ffffff',
                            color: color,
                        }}
                        onChange={onChange}
                        value={value}
                    />
                </div>

                {/* Font Selection */}
                <div className="w-full">

                    {/* Title */}
                    <p className="text-[1rem] mb-6" style={{ color: color }}>ڈاؤن لوڈ کرنے کے لیے کسی کو منتخب کریں۔</p>
                    
                    {/* Font Tiles */}
                    <div className="flex flex-col gap-3">
                        {fonts.map((font) => (
                            <Tile
                                key={font}
                                font={font}
                                value={value}
                                color={color}
                                onClick={() => download(font, value, color)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Section  */}
            <div
                className="hidden sticky top-0 md:block w-auto p-6 shadow-sm"
                style={{ backgroundColor: lightColor, borderColor: darkerColor }}
            >
                {/* Title */}
                <h2 className="text-lg font-semibold mb-6" style={{ color: color }}>اردو</h2>

                {/* Color Picker */}
                <div
                    style={{
                        borderRadius: "10px",
                        overflow: "hidden"
                    }}
                >
                    <SwatchesPicker
                        height={600}
                        color={color}
                        onChangeComplete={(color) => setColor(color.rgb)}
                    />
                </div>
            </div>

            

            {/* Color Picker */}
            <div className="fixed bottom-4 right-4 md:hidden">

                {/* Toggle */}
                <button
                    className="p-4 text-[1.5rem] rounded-2xl border-[#000] border-[0.1px] border-opacity-20 w-16 h-16 shadow-md bg-[#fff] flex justify-center items-center"
                    onClick={() => setShowColorPicker(!showColorPicker)}
                >
                    🎨
                </button>

            </div>

            {/* Color Picker Modal */}
            {showColorPicker && (
                <div
                    className="fixed md:hidden animate-fade-in bottom-24 right-4 border-[#000] border-[0.1px] border-opacity-20 w-[90%] max-w-sm p-6 rounded-lg shadow-lg bg-[#fff] z-50"
                >
                    {/* Color Picker */}
                    <SwatchesPicker
                        height={300}
                        color={color}
                        width={"100%"}
                        onChangeComplete={(color) => setColor(color.rgb)}
                    />

                    {/* Close */}
                    <button
                        className="mt-4 w-full py-2 rounded-md text-[#fff] shadow-md"
                        style={{ backgroundColor: darkerColor }}
                        onClick={() => setShowColorPicker(false)}
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
};

export default Home;
