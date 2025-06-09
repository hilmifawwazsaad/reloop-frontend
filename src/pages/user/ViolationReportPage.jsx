import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import MainLayout from "../../components/layouts/MainLayout";
import { ReportForm } from "../../components/features/report";

const ViolationReportPage = () => {
    const navigate = useNavigate();

    // Handle form submission
    const handleFormSubmit = async (formData) => {
        console.log('Form data:', formData);
        
        // Here you would typically send the data to your API
        // For now, just show success message
        alert('Laporan berhasil dikirim!');
        navigate('/');
    };

    // Handle cancel action
    const handleCancel = () => {
        navigate(-1);
    };

    return (
        <MainLayout role="user">
            <div className="">
                {/* Header with back button */}
                <div className="flex items-center gap-3 mb-6">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center justify-center w-8 h-8 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <h1 className="text-2xl font-bold text-gray-900">Lapor Pelanggaran</h1>
                </div>                {/* Form */}
                <ReportForm 
                    onSubmit={handleFormSubmit}
                    onCancel={handleCancel}
                />
            </div>
        </MainLayout>
    );
};

export default ViolationReportPage;