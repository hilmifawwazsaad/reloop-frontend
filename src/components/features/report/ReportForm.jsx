import React, { useState } from 'react';
import { Upload, ChevronDown } from 'lucide-react';
import { Input, Button } from '../../ui';
import { useForm } from '../../../hooks';

function ReportForm({
    onSubmit,
    onCancel,
    isSubmitting = false,
    className = ""
}) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Form initial values
    const initialValues = {
        idBarang: '',
        kategoriBarang: '',
        namaBarang: '',
        jenisKekerasan: '',
        deskripsi: ''
    };

    // Validation rules
    const validationRules = {
        idBarang: {
            required: true,
            label: 'ID Barang'
        },
        kategoriBarang: {
            required: true,
            label: 'Kategori Barang'
        },
        namaBarang: {
            required: true,
            label: 'Nama Barang'
        },
        jenisKekerasan: {
            required: true,
            label: 'Jenis Kekerasan'
        },
        deskripsi: {
            required: true,
            label: 'Deskripsi'
        }
    };

    const {
        values,
        errors,
        handleChange,
        handleSubmit
    } = useForm(initialValues, validationRules);

    // Violence types options
    const violenceTypes = [
        'Barang Scam',
        'Penipuan',
        'Barang Tidak Sesuai',
        'Barang Rusak',
        'Penjual Tidak Responsif',
        'Harga Tidak Wajar',
        'Lainnya'
    ];

    // Handle form submission
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        await handleSubmit(async (formData) => {
            if (onSubmit) {
                await onSubmit({
                    ...formData,
                    file: selectedFile
                });
            }
        });
    };

    // Handle file upload
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    // Handle dropdown selection
    const handleDropdownSelect = (value) => {
        handleChange({
            target: {
                name: 'jenisKekerasan',
                value: value
            }
        });
        setIsDropdownOpen(false);
    };

    return (
        <form onSubmit={handleFormSubmit} className={`space-y-2 ${className}`}>
            {/* ID Barang */}
            <Input
                label="ID Barang"
                name="idBarang"
                value={values.idBarang}
                onChange={handleChange}
                error={errors.idBarang}
                placeholder="BRG-001-012"
                required
            />

            {/* Kategori Barang */}
            <Input
                label="Kategori Barang"
                name="kategoriBarang"
                value={values.kategoriBarang}
                onChange={handleChange}
                error={errors.kategoriBarang}
                placeholder="Buku"
                required
            />

            {/* Nama Barang */}
            <Input
                label="Nama Barang"
                name="namaBarang"
                value={values.namaBarang}
                onChange={handleChange}
                error={errors.namaBarang}
                placeholder="Buku Fisika I"
                required
            />

            {/* Jenis Kekerasan - Custom Dropdown */}
            <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                    Jenis Kekerasan <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`
                            w-full px-4 py-2 text-sm border-2 rounded-lg bg-gray-50 
                            transition-all duration-200 flex items-center justify-between
                            focus:outline-none focus:ring-3 focus:ring-blue-100 focus:border-blue-500 focus:bg-white
                            ${errors.jenisKekerasan
                                ? 'border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-100'
                                : 'border-gray-200 hover:border-gray-300'
                            }
                        `}
                    >
                        <span className={values.jenisKekerasan ? 'text-gray-900' : 'text-gray-500'}>
                            {values.jenisKekerasan || 'Barang Scam'}
                        </span>
                        <ChevronDown 
                            size={16} 
                            className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                        />
                    </button>
                    
                    {isDropdownOpen && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                            {violenceTypes.map((type) => (
                                <button
                                    key={type}
                                    type="button"
                                    onClick={() => handleDropdownSelect(type)}
                                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                {errors.jenisKekerasan && (
                    <p className="text-sm text-red-600 mt-1">{errors.jenisKekerasan}</p>
                )}
            </div>

            {/* Deskripsi */}
            <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                    Deskripsi <span className="text-red-500">*</span>
                </label>
                <textarea
                    name="deskripsi"
                    value={values.deskripsi}
                    onChange={handleChange}
                    placeholder="Barang Tidak Sesuai"
                    rows={4}
                    className={`
                        w-full px-4 py-2 text-sm border-2 rounded-lg bg-gray-50 
                        transition-all duration-200 resize-none
                        focus:outline-none focus:ring-3 focus:ring-blue-100 focus:border-blue-500 focus:bg-white
                        ${errors.deskripsi
                            ? 'border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-100'
                            : 'border-gray-200 hover:border-gray-300'
                        }
                    `}
                />
                {errors.deskripsi && (
                    <p className="text-sm text-red-600 mt-1">{errors.deskripsi}</p>
                )}
            </div>

            {/* File Upload */}
            <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                    Bukti <span className="text-red-500">*</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-300 transition-colors">
                    <input
                        type="file"
                        onChange={handleFileChange}
                        accept="image/*,.pdf,.doc,.docx"
                        className="hidden"
                        id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                        <div className="text-sm text-gray-600">
                            {selectedFile ? (
                                <span className="font-medium text-blue-600">
                                    {selectedFile.name}
                                </span>
                            ) : (
                                <>
                                    <span className="font-medium text-blue-600">Upload Dokumen Bukti Pelanggaran</span>
                                    <br />
                                    <span className="text-gray-500">atau drag and drop file di sini</span>
                                </>
                            )}
                        </div>
                        <div className="text-xs text-gray-500 mt-2">
                            PNG, JPG, PDF hingga 10MB
                        </div>
                    </label>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
                <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    onClick={onCancel}
                    className="flex-1"
                >
                    Batal
                </Button>
                <Button
                    type="submit"
                    variant="primary"
                    size="sm"
                    loading={isSubmitting}
                    className="flex-1"
                >
                    Kirim Laporan
                </Button>
            </div>
        </form>
    );
}

export default ReportForm;