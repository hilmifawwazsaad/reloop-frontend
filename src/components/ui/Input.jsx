function Input({
    label,
    error,
    required = false,
    type = "text",
    placeholder,
    className = "",
    ...props
}) {
    return (
        <div className="space-y-1">
            {label && (
                <label className="text-sm font-medium text-gray-700">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <input
                type={type}
                placeholder={placeholder}
                className={`
            w-full px-4 py-2 text-sm border-2 rounded-lg bg-gray-50 
            transition-all duration-200 
            focus:outline-none focus:ring-3 focus:ring-blue-100 focus:border-blue-500 focus:bg-white
            ${error
                        ? 'border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-100'
                        : 'border-gray-200 hover:border-gray-300'
                    }
            ${className}
        `}
                {...props}
            />
            {error && (
                <p className="text-sm text-red-600 mt-1">{error}</p>
            )}
        </div>
    )
}

export default Input