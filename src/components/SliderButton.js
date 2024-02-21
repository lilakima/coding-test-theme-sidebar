import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SliderButton = ({ mode, label }) => {
    let buttonClass = "slider-button p-2 rounded-md";
    if (label === "ALL" || label === "MagnifyingGlassIcon") {
      buttonClass += ` ${mode === 'dark' ? 'bg-gray-800 text-yellow-500' : 'bg-primary-background text-white'}`;
    } else {
      buttonClass = "bg-gray-800 text-white p-2 rounded-md"
    }
  
    return (
      <button className={buttonClass}>
        {label === "MagnifyingGlassIcon" ? (
          <MagnifyingGlassIcon className="h-5 w-5" />
        ) : (
          label
        )}
      </button>
    );
  };

  export default SliderButton;