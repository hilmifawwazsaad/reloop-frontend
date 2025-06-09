import React from 'react';

const Chip = ({ 
    children, 
    variant = 'default', 
    size = 'sm',
    className = "",
    ...props 
}) => {
    const baseClasses = "inline-flex items-center font-medium rounded-full transition-colors";
    
    const variantClasses = {
        default: "bg-blue-100 text-blue-600",
        success: "bg-green-100 text-green-600",
        warning: "bg-yellow-100 text-yellow-600",
        error: "bg-red-100 text-red-600",
        secondary: "bg-gray-100 text-gray-600"
    };
    
    const sizeClasses = {
        xs: "px-2 py-0.5 text-[9px] font-regular",
        sm: "px-2 py-1 text-xs font-regular",
        md: "px-3 py-1 text-sm font-regular",
        lg: "px-4 py-2 text-base font-regular"
    };

    return (
        <span 
            className={`
                ${baseClasses} 
                ${variantClasses[variant]} 
                ${sizeClasses[size]}
                ${className}
            `}
            {...props}
        >
            {children}
        </span>
    );
};

export default Chip;
