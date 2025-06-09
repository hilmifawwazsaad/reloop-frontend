import React, { useState } from 'react';
import { Search, Filter, Package, X, Edit, Trash2, UploadCloud } from 'lucide-react';
import MainLayout from '../../components/layouts/MainLayout';
import { ProductCard } from '../../components/features/product';

const SellerProductPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);

  const [editData, setEditData] = useState({});

  const products = [
    {
        id: 1,
        title: 'Laptop Asus ROG',
        category: 'Elektronik',
        price: 'Rp. 8.500.000,-',
        location: 'Jalan Danau Indah Raya, Banjar No. 35, Kecamatan Blimbing, Kota Malang',
        rating: 4.8,
        image: '/api/placeholder/200/280',
        seller: 'TechStore'
    },
    {
        id: 2,
        title: 'Sepeda Gunung MTB',
        category: 'Olahraga',
        price: 'Rp. 2.200.000,-',
        location: 'Jalan Danau Indah Raya, Banjar No. 35, Kecamatan Blimbing, Kota Malang',
        rating: 4.3,
        image: '/api/placeholder/200/280',
        seller: 'BikeShop'
    },
];

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDetailClick = (product) => setSelectedProduct(product);

  const handleDeleteClick = (product) => {
    setProductToDelete(product);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    console.log('Menghapus:', productToDelete);
    setShowDeleteConfirm(false);
    setProductToDelete(null);
    setSelectedProduct(null);
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(false);
    setProductToDelete(null);
  };

  const handleEditClick = (product) => {
    setEditData(product);
    setShowEditForm(true);
  };

  const closeEditForm = () => {
    setShowEditForm(false);
    setEditData({});
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditData({ ...editData, image: file.name });
    }
  };

  return (
    <MainLayout role="seller">
      <div className="min-h-screen bg-gray-50">
        <div className="px-6 pt-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Barang Saya</h1>
          <p className="text-gray-600">Anda bisa melihat, mengedit, dan menghapus barang yang sedang Anda jual!</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow mb-6 p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Cari Barang..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
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
                onDetailClick={() => handleDetailClick(product)}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Package className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">Tidak ada produk</h3>
              <p className="mt-1 text-sm text-gray-500">
                {searchTerm ? 'Tidak ada produk yang sesuai dengan pencarian.' : 'Belum ada produk yang ditambahkan.'}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Detail */}
      {selectedProduct && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg p-6 relative overflow-auto max-h-[90vh]">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 text-gray-500 hover:text-red-500">
              <X size={24} />
            </button>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2">
                {selectedProduct.image ? (
                  <img src={selectedProduct.image} alt={selectedProduct.title} className="object-cover rounded w-full" />
                ) : (
                  <div className="bg-gray-100 text-center text-gray-400 flex items-center justify-center h-64 rounded">
                    Foto Produk
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">{selectedProduct.title}</h2>
                <p className="mb-2 text-gray-600">{selectedProduct.description}</p>
                <p className="mb-1"><strong>Kategori:</strong> {selectedProduct.category}</p>
                <p className="mb-1"><strong>Kondisi:</strong> {selectedProduct.condition}</p>
                <p className="mb-1"><strong>Alamat:</strong> {selectedProduct.location}</p>
                <p className="mb-1"><strong>Harga:</strong> Rp {selectedProduct.price}</p>
                <p className="mb-1"><strong>No. Telepon:</strong> {selectedProduct.phone}</p>
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => handleEditClick(selectedProduct)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded flex items-center gap-2"
                  >
                    <Edit size={16} /> Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(selectedProduct)}
                    className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2"
                  >
                    <Trash2 size={16} /> Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Delete */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 text-center">
            <div className="text-yellow-500 flex justify-center mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856a2 2 0 001.994-1.851V7a2 2 0 00-1.994-1.851H5a2 2 0 00-1.994 1.851v10a2 2 0 001.994 1.851z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Konfirmasi Hapus</h2>
            <p className="text-gray-600 mb-6">Apakah anda ingin menghapus data ini?</p>
            <div className="flex justify-center gap-4">
              <button onClick={cancelDelete} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                Tidak, batalkan!
              </button>
              <button onClick={confirmDelete} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                Ya, Hapus!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Form */}
      {showEditForm && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center overflow-auto">
          <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg p-6 relative max-h-[90vh] overflow-auto">
            <button onClick={closeEditForm} className="absolute top-4 right-4 text-gray-500 hover:text-red-500">
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-1">Edit Barang</h2>
            <p className="text-sm text-gray-500 mb-6">Form untuk melakukan perubahan informasi pada barang!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-sm">ID Barang</label>
                <input type="text" value={editData.code} disabled className="w-full mt-1 px-4 py-2 border rounded bg-gray-100" />
              </div>
              <div>
                <label className="block font-medium text-sm">Kategori</label>
                <input type="text" value={editData.category} disabled className="w-full mt-1 px-4 py-2 border rounded bg-gray-100" />
              </div>
              <div className="md:col-span-2">
                <label className="block font-medium text-sm">Nama Barang</label>
                <input type="text" value={editData.title} className="w-full mt-1 px-4 py-2 border rounded" />
              </div>
              <div className="md:col-span-2">
                <label className="block font-medium text-sm">Deskripsi</label>
                <input type="text" value={editData.description} className="w-full mt-1 px-4 py-2 border rounded" />
              </div>
              <div>
                <label className="block font-medium text-sm">Kondisi</label>
                <input type="text" value={editData.condition} className="w-full mt-1 px-4 py-2 border rounded" />
              </div>
              <div>
                <label className="block font-medium text-sm">Alamat</label>
                <input type="text" value={editData.location} className="w-full mt-1 px-4 py-2 border rounded" />
              </div>
              <div>
                <label className="block font-medium text-sm">Harga</label>
                <input type="text" value={editData.price} className="w-full mt-1 px-4 py-2 border rounded" />
              </div>
              <div>
                <label className="block font-medium text-sm">Nomor Telepon</label>
                <input type="text" value={editData.phone} className="w-full mt-1 px-4 py-2 border rounded" />
              </div>
              <div className="md:col-span-2">
                <label className="block font-medium text-sm mb-1">Gambar</label>
                <label className="flex items-center justify-center px-4 py-2 bg-gray-100 border rounded cursor-pointer hover:bg-gray-200 gap-2 w-fit">
                  <UploadCloud size={18} /> Upload Gambar Barang
                  <input type="file" onChange={handleImageUpload} className="hidden" />
                </label>
              </div>
              <div className="md:col-span-2">
                <label className="block font-medium text-sm">Status</label>
                <input type="text" value={editData.status} className="w-full mt-1 px-4 py-2 border rounded" />
              </div>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default SellerProductPage;
