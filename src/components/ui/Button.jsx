import { forwardRef } from 'react';

const Button = forwardRef(({ 
  children, 
  className = '', 
  variant = 'primary', 
  size = 'md', 
  type = 'button',
  ...props 
}, ref) => {
  // Define base styles based on variant
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    outline: 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };

  // Define size styles
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      ref={ref}
      type={type}
      className={`
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        inline-flex items-center justify-center font-medium
        rounded-md shadow-sm transition-colors
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;