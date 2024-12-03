// Tile component
const Tile = ({ font, value, color, onClick }) => {

    // Convert color object to RGBA string
    const rgbaColor = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
    
    // Default value if not provided
    value = value || "زندگی نہ ملیگی دوبارہ"

    // Render
    return (
        <div
            style={{
                color: rgbaColor,
                fontFamily: font,
                backgroundColor: "#fff"
            }}
            key={value}
            className="py-8 px-10 text-lg border-[#000] border-[0.1px] border-opacity-20 rounded-xl shadow-sm cursor-pointer animate-fade-in"
            onClick={onClick}
        >
            {/* Display user-provided text */}
            {value}
        </div>
    );
};

// Export
export default Tile;
