import React from 'react';
import { Routes, Route } from "react-router-dom"
import { ForbiddenPage, MaintenancePage, NotFoundPage, ServerErrorPage } from '../pages/common';
import { HomePage, ViolationReportPage } from '../pages/user';
import { LoginPage, RegisterPage } from "../pages/auth"
import { SellerDashboardPage, SellerProductPage, SellProductPage, SellerReport } from '../pages/seller';

const AppRoutes = () => {
    return (
        <Routes>
            {/* Error Pages */}
            <Route path="/403" element={<ForbiddenPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="/500" element={<ServerErrorPage />} />
            <Route path="/maintenance" element={<MaintenancePage />} />
            
            {/* User Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/report" element={<ViolationReportPage />} />
            
            {/* Auth Pages */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            {/* Seller Pages */}
            <Route path="/seller/*" element={
                // <ProtectedRoute allowedRoles={['seller']}>
                    <Routes>
                        <Route path="/" element={<SellerDashboardPage />} />
                        <Route path="/dashboard" element={<SellerDashboardPage />} />
                        <Route path="/products" element={<SellerProductPage />} />
                        <Route path="/sell-product" element={<SellProductPage />} />
                        <Route path="/report" element={<SellerReport />} />
                    </Routes>
                // </ProtectedRoute>
            } />
            
            {/* Admin Pages */}
            {/* <Route path="/admin/*" element={
                <ProtectedRoute allowedRoles={['admin']}>
                    <Routes>
                        <Route path="/" element={<PAGES />} />
                    </Routes>
                </ProtectedRoute>
            } /> */}
            
            {/* Catch all unmatched routes */}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRoutes