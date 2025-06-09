import { useState } from 'react'

function InputSearch({
    placeholder = "Cari produk...",
    value = "",
    onChange,
    onSearch,
    onClear,
    className = "",
    size = "md",
    disabled = false,
    showClearButton = true,
    ...props
}) {
    const [searchValue, setSearchValue] = useState(value)

    const handleInputChange = (e) => {
        const newValue = e.target.value
        setSearchValue(newValue)
        if (onChange) {
            onChange(newValue)
        }
    }

    const handleSearch = () => {
        if (onSearch) {
            onSearch(searchValue)
        }
    }

    const handleClear = () => {
        setSearchValue("")
        if (onClear) {
            onClear()
        }
        if (onChange) {
            onChange("")
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    const sizeClasses = {
        sm: "px-3 py-2 text-sm",
        md: "px-4 py-3 text-base",
        lg: "px-5 py-4 text-lg"
    }

    const iconSizeClasses = {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6"
    }

    return (
        <div className={`relative ${className}`}>
            <div className="relative">
                {/* Search Icon */}
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg 
                        className={`${iconSizeClasses[size]} text-gray-400`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                        />
                    </svg>
                </div>

                {/* Input Field */}
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    disabled={disabled}
                    className={`
                        w-full pl-10 pr-12 border-2 rounded-lg bg-gray-50 
                        transition-all duration-200 
                        focus:outline-none focus:ring-3 focus:ring-blue-100 focus:border-blue-500 focus:bg-white
                        hover:border-gray-300
                        disabled:opacity-60 disabled:cursor-not-allowed
                        ${sizeClasses[size]}
                        ${disabled ? 'border-gray-200' : 'border-gray-200'}
                    `}
                    {...props}
                />

                {/* Clear Button */}
                {showClearButton && searchValue && (
                    <button
                        type="button"
                        onClick={handleClear}
                        disabled={disabled}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-gray-600 transition-colors duration-200"
                    >
                        <svg 
                            className={`${iconSizeClasses[size]} text-gray-400 hover:text-gray-600`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M6 18L18 6M6 6l12 12" 
                            />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    )
}

export default InputSearch