import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    Home,
    FileText,
    Package,
    ShoppingBag,
    Users,
    BarChart3,
    LogOut
} from 'lucide-react';

const Sidebar = ({ userRole = 'user', userName = 'User', onLogout, onToggle }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isCollapsed, setIsCollapsed] = useState(false); const menuConfigs = {
        user: {
            items: [
                { id: 'beranda', icon: Home, text: 'Beranda', path: '/' },
                { id: 'lapor', icon: FileText, text: 'Lapor Pelanggaran', path: '/report' }
            ]
        },
        seller: {
            role: 'Seller',
            avatar: 'S',
            items: [
                { id: 'beranda', icon: Home, text: 'Beranda', path: '/seller/' },
                { id: 'lapor', icon: FileText, text: 'Lapor Pelanggaran', path: '/seller/report' },
                { id: 'barang', icon: Package, text: 'Barang Saya', path: '/seller/product' },
                { id: 'jual', icon: ShoppingBag, text: 'Jual Barang', path: '/seller/sell-product' }
            ]
        },
        admin: {
            role: 'Admin',
            avatar: 'A',
            items: [
                { id: 'beranda', icon: Home, text: 'Beranda', path: '/admin/' },
                { id: 'kelola-user', icon: Users, text: 'Kelola User', path: '/admin/user' },
                { id: 'kelola-barang', icon: Package, text: 'Kelola Barang', path: '/admin/product' },
                { id: 'laporan', icon: BarChart3, text: 'Laporan User', path: '/admin/report' }
            ]
        }
    };

    const [activeMenuItem, setActiveMenuItem] = useState(() => {
        // Determine active menu based on current path
        const path = location.pathname;
        const config = menuConfigs[userRole] || menuConfigs.user;
        const activeItem = config.items.find(item => item.path === path);
        return activeItem ? activeItem.id : 'beranda';
    });

    const currentConfig = menuConfigs[userRole] || menuConfigs.user; const handleMenuClick = (item) => {
        setActiveMenuItem(item.id);
        navigate(item.path);
    };

    const handleLogout = () => {
        if (onLogout) {
            onLogout();
        }
    }; const toggleSidebar = () => {
        const newCollapsedState = !isCollapsed;
        setIsCollapsed(newCollapsedState);
        if (onToggle) {
            onToggle(newCollapsedState);
        }
    }; return (
        <div className={`
      ${isCollapsed ? 'w-20' : 'w-64'} 
      h-screen bg-white shadow-lg 
      flex flex-col transition-all duration-300 ease-in-out 
      relative
    `}>
            {/* Header */}
            <div className="p-4 border-b border-gray-200 flex justify-center items-center">
                <div className={`transition-all duration-300 flex items-center justify-center ${isCollapsed ? 'w-10 h-10' : 'w-32 h-12'}`}>
                    <img
                        src={isCollapsed ? "/logo-color.svg" : "/logo-color-text.svg"}
                        alt="Reloop Logo"
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/logo-color.svg";
                        }}
                    />
                </div>
            </div>

            {/* User Info - Only for seller and admin */}
            {userRole !== 'user' && (
                <div className="px-5 py-4 border-b border-gray-200 flex items-center gap-3">
                    <div className="w-9 h-9 bg-gray-500 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                        {currentConfig.avatar}
                    </div>
                    <div className={`
                        flex-1 transition-all duration-300 
                        ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}
                    `}>
                        <div className="font-semibold text-gray-800 text-sm mb-0.5">
                            {currentConfig.role}
                        </div>
                        <div className="text-xs text-gray-500">
                            Online
                        </div>
                    </div>
                </div>
            )}

            {/* Menu Section */}
            <div className="flex-1 py-2 overflow-hidden">
                <div className={`
                            px-5 py-2.5 text-[10px] text-gray-500 font-semibold uppercase tracking-wider transition-all duration-300
                            ${isCollapsed ? 'opacity-0 h-0 py-0' : 'opacity-100'}
                    `}>
                    Menu
                </div>
                <div className="flex flex-col">
                    {currentConfig.items.map((item) => (
                        <button
                            key={item.id}
                            className={`
                            flex items-center px-5 py-3 gap-3 text-sm font-medium transition-all duration-200 w-full text-left
                            ${isCollapsed ? 'justify-center' : ''}
                            ${activeMenuItem === item.id
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-700 hover:bg-gray-50'
                                }
                            `}
                            onClick={() => handleMenuClick(item)}
                        >
                            <span className="w-5 h-5 flex items-center justify-center text-base flex-shrink-0">
                                <item.icon size={18} />
                            </span>
                            <span className={`
                            font-medium transition-all duration-300 whitespace-nowrap
                            ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}
                            `}>
                                {item.text}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Footer - Only for seller and admin */}
            {userRole !== 'user' && (
                <div className="p-5 border-t border-gray-200">
                    <button
                        className="flex items-center gap-3 px-4 py-2.5 text-red-500 hover:bg-gray-50 rounded-lg transition-colors duration-200 w-full text-left text-sm"
                        onClick={handleLogout}
                    >
                        <span className="w-5 h-5 flex items-center justify-center text-base flex-shrink-0">
                            <LogOut size={18} />
                        </span>
                        <span className={`
                            font-medium transition-all duration-300 whitespace-nowrap
                            ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}
                        `}>
                            Keluar
                        </span>
                    </button>
                </div>
            )}

            {/* Toggle Button */}
            <button
                className="absolute top-5 -right-4 w-8 h-8 bg-blue-500 hover:bg-blue-600 border-none rounded-full text-white cursor-pointer flex items-center justify-center text-sm shadow-lg transition-all duration-200 hover:scale-110 z-50"
                onClick={toggleSidebar}
            >
                <span className="text-sm">
                    {isCollapsed ? '›' : '‹'}
                </span>
            </button>
        </div>
    );
};

export default Sidebar