import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, MapPin, Star, Ban } from 'lucide-react';
import { Button, Banner, InputSearch } from '../../components/ui';
import { ProductCard } from '../../components/features/product';
import MainLayout from '../../components/layouts/MainLayout';

const HomePage = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    // Sample product data - replace with actual data from API
    const products = [
        {
            id: 1,
            title: 'Buku Fisika I',
            category: 'Buku',
            price: 'Rp 30.000,-',
            location: 'Jalan Danau Indah, Kecamatan Blimbing, Kota Malang',
            rating: 4.5,
            image: '/api/placeholder/200/280',
            seller: 'User'
        },
        {
            id: 2,
            title: 'Laptop Asus ROG',
            category: 'Elektronik',
            price: 'Rp 8.500.000,-',
            location: 'Jalan Danau Indah Raya, Banjar No. 35, Kecamatan Blimbing, Kota Malang',
            rating: 4.8,
            image: '/api/placeholder/200/280',
            seller: 'TechStore'
        },
        {
            id: 3,
            title: 'Sepeda Gunung MTB',
            category: 'Olahraga',
            price: 'Rp 2.200.000,-',
            location: 'Jalan Danau Indah Raya, Banjar No. 35, Kecamatan Blimbing, Kota Malang',
            rating: 4.3,
            image: '/api/placeholder/200/280',
            seller: 'BikeShop'
        },
        {
            id: 4,
            title: 'Meja Belajar Kayu',
            category: 'Furniture',
            price: 'Rp 450.000,-',
            location: 'Jalan Danau Indah Raya, Banjar No. 35, Kecamatan Blimbing, Kota Malang',
            rating: 4.1,
            image: '/api/placeholder/200/280',
            seller: 'FurnitureStore'
        },
        {
            id: 5,
            title: 'Kamera Canon EOS',
            category: 'Elektronik',
            price: 'Rp 3.800.000,-',
            location: 'Jalan Danau Indah Raya, Banjar No. 35, Kecamatan Blimbing, Kota Malang',
            rating: 4.7,
            image: '/api/placeholder/200/280',
            seller: 'CameraShop'
        }
    ];

    return (
        <MainLayout role="user">
            {/* Button */}
            <div className="mb-4 flex justify-end">
                <div className="inline-flex ml-auto">
                    <Button
                        onClick={() => navigate('/login')}
                        variant="primary"
                        size='sm'
                    >
                        Masuk
                    </Button>
                </div>
            </div>

            {/* Banner */}
            <Banner
                topText="Perlu Barang Bekas dengan Kualitas Berkelas?"
                mainText="Reloop Tempatnya"
                bottomText="Segera Cari dan Dapatkan Barang Kebutuhan Anda!"
            />

            {/* Search Bar */}
            <InputSearch
                placeholder="Cari produk..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onSearch={() => console.log('Searching for:', searchQuery)}
                size="sm"
                className="mt-4 mb-4"
                showClearButton
            />

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            category={product.category}
                            price={product.price}
                            location={product.location}
                            image={product.image}
                            rating={product.rating}
                            seller={product.seller}
                            onDetailClick={(id) => navigate(`/product/${id}`)}
                        />
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default HomePage;
