import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, MapPin, Star, Ban } from 'lucide-react';
import { Button, Banner, InputSearch } from '../../components/ui';
import { ProductCard } from '../../components/features/product';
import MainLayout from '../../components/layouts/MainLayout';

const SellerDashboardPage = () => {
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
        <MainLayout role="seller">
            <div className="p-6">
                {/* Banner */}
                <Banner
                    topText="Selamat Datang kembali,"
                    mainText="Seller!"
                    bottomText="Isi Formulir, Jual Barang, dan Dapatkan Keuntungan!"
                />

                {/* Search Bar */}
                <div className="mt-6 mb-6 flex items-center gap-4">
                    <div className="flex-1">
                        <InputSearch
                            placeholder="Cari Barang"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onSearch={() => console.log('Searching for:', searchQuery)}
                            size="sm"
                            showClearButton
                        />
                    </div>
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <Filter size={20} className="text-gray-600" />
                    </button>
                </div>

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
            </div>
        </MainLayout>
    );
};

export default SellerDashboardPage;