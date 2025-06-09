import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, ArrowLeft } from 'lucide-react';
import { Button } from '../../components/ui';
import MainLayout from '../../components/layouts/MainLayout';

const SellProductPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        productId: '',
        productName: '',
        description: '',
        condition: '',
        address: '',
        price: '',
        phoneNumber: '',
        image: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                image: file
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission logic here
        // Navigate back to dashboard or show success message
    };

    const handleCancel = () => {
        navigate(-1); // Go back to previous page
    };

    return (
        <MainLayout role="seller">
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-4xl mx-auto p-6">
                    {/* Header */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">Jual Barang</h1>
                        <p className="text-gray-600">Isi formulir di bawah ini untuk menjual barang!</p>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-lg shadow-sm p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* ID Barang */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        ID Barang <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="productId"
                                        value={formData.productId}
                                        onChange={handleInputChange}
                                        placeholder="BRG-001-013"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                        required
                                    />
                                </div>

                                {/* Kategori */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Kategori <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white"
                                        required
                                    >
                                        <option value="">Elektronik</option>
                                        <option value="elektronik">Elektronik</option>
                                        <option value="buku">Buku</option>
                                        <option value="furniture">Furniture</option>
                                        <option value="olahraga">Olahraga</option>
                                        <option value="fashion">Fashion</option>
                                        <option value="lainnya">Lainnya</option>
                                    </select>
                                </div>
                            </div>

                            {/* Nama Barang */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Nama Barang <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="productName"
                                    value={formData.productName}
                                    onChange={handleInputChange}
                                    placeholder="Fisika Dasar I"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                    required
                                />
                            </div>

                            {/* Deskripsi */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Deskripsi <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    placeholder="Buku ini pegangan saat Megawide"
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-vertical"
                                    required
                                />
                            </div>

                            {/* Kondisi */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Kondisi <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="condition"
                                    value={formData.condition}
                                    onChange={handleInputChange}
                                    placeholder="Baik"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                    required
                                />
                            </div>

                            {/* Alamat */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Alamat <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    placeholder="Jalan Dharmahusada Indah Timur No.38-47, Surabaya 60115"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                    required
                                />
                            </div>

                            {/* Harga */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Harga <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    placeholder="Rp 30.000,-"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                    required
                                />
                            </div>

                            {/* Nomor Telepon */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Nomor Telepon <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    placeholder="089530700545"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                    required
                                />
                            </div>

                            {/* Upload Gambar */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Gambar <span className="text-red-500">*</span>
                                </label>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                        id="image-upload"
                                        required
                                    />
                                    <label
                                        htmlFor="image-upload"
                                        className="cursor-pointer flex flex-col items-center"
                                    >
                                        <Upload className="w-12 h-12 text-gray-400 mb-4" />
                                        <p className="text-gray-600 mb-2">Upload Gambar Barang</p>
                                        <p className="text-sm text-gray-400">
                                            {formData.image ? formData.image.name : 'Pilih file gambar (JPG, PNG, dll)'}
                                        </p>
                                    </label>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    className="flex items-center gap-2 px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                                >
                                </button>
                                
                                <div className="flex gap-4">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={handleCancel}
                                        className="px-8 py-2 bg-red-500 text-white border-red-500 hover:bg-red-600 hover:border-red-600"
                                    >
                                        Batal
                                    </Button>
                                    <Button
                                        type="submit"
                                        className="px-8 py-2 bg-blue-500 text-white hover:bg-blue-600"
                                    >
                                        Simpan dan Publikasikan
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default SellProductPage;