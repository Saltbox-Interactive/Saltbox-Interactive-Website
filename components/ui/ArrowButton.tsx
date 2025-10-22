interface ArrowButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  'aria-label'?: string;
}

export default function ArrowButton({
  direction,
  onClick,
  disabled = false,
  className = "",
  'aria-label': ariaLabel
}: ArrowButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`group relative w-8 h-8 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed ${className}`}
      aria-label={ariaLabel || (direction === 'left' ? 'Previous' : 'Next')}
    >
      {/* Solid background (default state) */}
      <div className="absolute inset-0 bg-[#1a1a1a] group-hover:group-enabled:bg-black"></div>

      {/* Corner borders (hover state) */}
      <div className="absolute inset-0 opacity-0 group-hover:group-enabled:opacity-100 rounded-sm">
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white rounded-tl-sm"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white rounded-tr-sm"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white rounded-bl-sm"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white rounded-br-sm"></div>
      </div>

      {/* Arrow icon */}
      <svg
        className="w-4 h-4 text-white relative z-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        {direction === 'left' ? (
          <path d="M19 12H5M5 12l7 7M5 12l7-7" />
        ) : (
          <path d="M5 12h14M12 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );
}
