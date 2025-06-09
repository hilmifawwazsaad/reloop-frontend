import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { Button, Chip } from '../../ui';

const ProductCard = ({
    id,
    title = "Nama Produk",
    category = "Kategori",
    price = "Rp 0",
    location = "Lokasi tidak tersedia",
    image = null,
    rating = 0,
    seller = "User",
    onDetailClick,
    className = ""
}) => {
    const handleDetailClick = () => {
        if (onDetailClick) {
            onDetailClick(id);
        }
    };

    const defaultImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjI4MCIgZmlsbD0iI2Y3ZjdmNyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTk5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Gb3RvIFByb2R1azwvdGV4dD48L3N2Zz4=';

    return (
        <div className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow ${className}`}>
            {/* Product Image */}
            <div className="aspect-[3/4] bg-gray-100 rounded-t-lg overflow-hidden">
                <img
                    src={image || defaultImage}
                    alt={title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.src = defaultImage;
                    }}
                />
            </div>

            {/* Product Info */}
            <div className="p-4">
                {/* Product Title */}
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                    {title}
                </h3>                {/* Category Chip and Rating */}
                <div className="flex items-center gap-2 mb-2">
                    <Chip variant="default" size="xs">
                        {category}
                    </Chip>
                    {rating > 0 && (
                        <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs text-gray-600">{rating}</span>
                        </div>
                    )}
                </div>

                {/* Location */}
                <div className="flex items-start gap-1 mb-3">
                    <MapPin className="w-3 h-3 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-500 line-clamp-2">
                        {location}
                    </span>
                </div>

                {/* Price */}
                <div className="text-lg font-bold text-blue-600 mb-3">
                    {price}
                </div>

                {/* Detail Button */}
                <Button
                    onClick={handleDetailClick}
                    variant="secondary"
                    size="sm"
                    className="!bg-gray-100 !hover:bg-gray-200 !text-gray-700 !border-0"
                >
                    Detail
                </Button>
            </div>
        </div>
    );
};

export default ProductCard;