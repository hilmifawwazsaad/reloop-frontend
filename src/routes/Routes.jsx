import React from 'react';
import { Routes, Route } from "react-router-dom"
import { ForbiddenPage, MaintenancePage, NotFoundPage, ServerErrorPage } from '../pages/common';
import { HomePage, ProductDetailsPage, ViolationReportPage } from '../pages/user';
import { LoginPage, RegisterPage } from "../pages/auth"

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
            <Route path="/item" element={<ProductDetailsPage />} />
            <Route path="/report" element={<ViolationReportPage />} />

            {/* Auth Pages */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Seller Pages */}
            {/* <Route path="/seller/*" element={
                <ProtectedRoute allowedRoles={['seller']}>
                    <Routes>
                        <Route path="/" element={<PAGES />} />
                    </Routes>
                </ProtectedRoute>
            } /> */}

            {/* Admin Pages */}
            {/* <Route path="/admin/*" element={
                <ProtectedRoute allowedRoles={['admin']}>
                    <Routes>
                        <Route path="/" element={<PAGES />} />
                    </Routes>
                </ProtectedRoute>
            } /> */}
        </Routes>
    )
}

export default AppRoutes
