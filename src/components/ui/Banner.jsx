import React from 'react';

function Banner({
    topText = "Perlu Barang Bekas dengan Kualitas Berkelas?",
    mainText = "Reloop Tempatnya",
    bottomText = "Segera Cari dan Dapatkan Barang Kebutuhan Anda!",
    className = "",
    variant = "primary"
}) {
    // Variant styles
    const variants = {
        primary: "bg-gradient-to-r from-blue-600 to-blue-500 relative overflow-hidden",
        success: "bg-gradient-to-r from-green-500 to-green-600 relative overflow-hidden",
        warning: "bg-gradient-to-r from-yellow-500 to-yellow-600 relative overflow-hidden",
        danger: "bg-gradient-to-r from-red-500 to-red-600 relative overflow-hidden",
        purple: "bg-gradient-to-r from-purple-500 to-purple-600 relative overflow-hidden",
        indigo: "bg-gradient-to-r from-indigo-500 to-indigo-600 relative overflow-hidden"
    };

    // Add circular elements to the banner
    React.useEffect(() => {
        const bannerElements = document.querySelectorAll('[class*="bg-gradient-to-r"]');
        
        bannerElements.forEach(banner => {
            // Clear existing circles if any
            const existingCircles = banner.querySelectorAll('.banner-circle');
            existingCircles.forEach(circle => circle.remove());
            
            // Add new circles
            for (let i = 0; i < 3; i++) {
                const circle = document.createElement('div');
                circle.className = 'banner-circle absolute rounded-full bg-white/10';
                
                // Random size between 50px and 150px
                const size = Math.floor(Math.random() * 100) + 50;
                circle.style.width = `${size}px`;
                circle.style.height = `${size}px`;
                
                // Random position
                circle.style.top = `${Math.floor(Math.random() * 100)}%`;
                circle.style.left = `${Math.floor(Math.random() * 100)}%`;
                
                // Add slight blur
                circle.style.filter = 'blur(1px)';
                
                // Add to banner
                banner.appendChild(circle);
            }
        });
    }, [variant]); // Re-run when variant changes

    return (
        <div className={`
        ${variants[variant]}
        rounded-xl p-10 text-white shadow-lg 
        ${className}
    `}>
            <div className="text-sm md:text-base font-normal text-white/90 mb-2">
                {topText}
            </div>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                {mainText}
            </div>
            <div className="text-xs font-normal text-white/90">
                {bottomText}
            </div>
        </div>
    );
}

export default Banner
