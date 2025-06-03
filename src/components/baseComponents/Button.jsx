const Button = ({ label, onClick, type = 'button', variant = 'primary', disabled = false, className = '' }) => {
  let baseClasses = 'px-2 py-2 text-sm rounded-md transition-colors duration-200 focus:outline-none focus:ring-1 font-inter';
  let variantClasses = '';

  switch (variant) {
    case 'primary':
      variantClasses = 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';
      break;
    case 'secondary':
      variantClasses = 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400';
      break;
    case 'link':
      variantClasses = 'text-blue-600 hover:underline bg-transparent p-0 focus:ring-transparent';
      break;
    default:
      variantClasses = 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button