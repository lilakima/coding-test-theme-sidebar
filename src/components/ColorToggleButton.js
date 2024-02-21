const ColorToggleButton = ({ mode, toggleMode, color, label }) => (
    <button className={`bg-${color} text-white px-4 py-2 rounded`} onClick={() => toggleMode(color)}>
      {label}
    </button>
);

export default ColorToggleButton;