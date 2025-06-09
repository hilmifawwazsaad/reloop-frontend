import React, { useState } from 'react';
import Sidebar from './Sidebar';

const MainLayout= ({ children, role }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleSidebarToggle = (collapsed) => {
        setIsCollapsed(collapsed);
    };    return (
        <div className="relative min-h-screen">
            {/* Sidebar dengan posisi fixed untuk memenuhi viewport penuh */}
            <div className="fixed top-0 left-0 h-full z-40">
                <Sidebar 
                    userRole={role} 
                    onToggle={handleSidebarToggle}
                />
            </div>
            
            {/* Konten utama dengan margin kiri yang responsif */}
            <div className={`min-h-screen transition-all duration-300 ${
                isCollapsed ? 'ml-20' : 'ml-64'
            }`}>
                <main className="min-h-screen">
                    <div>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MainLayout