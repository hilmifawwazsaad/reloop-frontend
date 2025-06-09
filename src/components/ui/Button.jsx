function Button({
    children,
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled = false,
    type = 'button',
    className = "",
    ...props
}) {
    const baseClasses = "font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-4 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"

    const variantClasses = {
        primary: "bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-200",
        secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-200",
        outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-200"
    }

    const sizeClasses = {
        xs: "px-2 py-1 text-xs w-full ",
        sm: "px-4 py-2 text-sm w-full",
        md: "px-6 py-3 text-base w-full",
        lg: "px-8 py-4 text-lg w-full"
    }

    return (
        <button
            type={type}
            disabled={disabled || loading}
            className={`
        ${baseClasses} 
        ${variantClasses[variant]} 
        ${sizeClasses[size]}
        ${className}
    `}
            {...props}
        >
            {loading ? (
                <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                    Loading...
                </>
            ) : (
                children
            )}
        </button>
    )
}

export default Button