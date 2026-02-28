import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Home, FileText, CreditCard, Settings, LogOut, Bell } from 'lucide-react';
import clsx from 'clsx';
import { useAuthStore } from '../store/useAuthStore';

export default function Dashboard() {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, logout } = useAuthStore();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const navItems = [
        { path: '/dashboard', icon: Home, label: 'Главная', exact: true },
        { path: '/dashboard/documents', icon: FileText, label: 'Документы' },
        { path: '/dashboard/payments', icon: CreditCard, label: 'Оплата' },
        { path: '/dashboard/settings', icon: Settings, label: 'Настройки' },
    ];

    return (
        <div className="min-h-screen bg-[#f0efff] flex font-sans selection:bg-[#6C5CE7] selection:text-white">

            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 flex flex-col hidden md:flex sticky top-0 h-screen">
                <div className="p-6">
                    <Link to="/" className="text-2xl font-black tracking-tighter text-black flex items-center gap-3 group transition-colors">
                        <div className="w-8 h-8 bg-[#6C5CE7] rounded-lg flex items-center justify-center text-white text-lg font-black group-hover:bg-[#5a4bd1] group-hover:text-white transition-colors shadow-sm">E</div>
                        EUROJOB
                    </Link>
                </div>

                <nav className="flex-1 px-4 py-8 space-y-3">
                    {navItems.map((item) => {
                        const isActive = item.exact
                            ? location.pathname === item.path
                            : location.pathname.startsWith(item.path);

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={clsx(
                                    "flex items-center gap-3 px-4 py-3 rounded-2xl font-bold transition-all",
                                    isActive
                                        ? "bg-[#6C5CE7] text-white shadow-sm transform translate-x-1"
                                        : "text-slate-500 hover:bg-slate-50 hover:text-white"
                                )}
                            >
                                <item.icon className="w-5 h-5" />
                                {item.label}
                            </Link>
                        )
                    })}
                </nav>

                <div className="p-4 border-t border-slate-200">
                    <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 hover:text-black rounded-2xl font-bold transition-colors cursor-pointer group">
                        <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        Выйти
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">

                {/* Header */}
                <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-30">
                    <div className="px-8 py-4 flex items-center justify-between">
                        <h1 className="text-2xl font-black text-black">Личный кабинет</h1>
                        <div className="flex items-center gap-5">
                            <button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-black hover:bg-slate-100 transition-colors relative cursor-pointer group">
                                <Bell className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#6C5CE7] border-2 border-white rounded-full"></span>
                            </button>
                            <div className="flex items-center gap-3 pl-5 border-l border-slate-200">
                                <div className="text-right hidden sm:block">
                                    <div className="text-sm font-black text-black leading-tight tracking-tight">{user?.name || 'Пользователь'}</div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{user?.id || 'ID: EUR-0000'}</div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-[#6C5CE7] p-[2px] shadow-sm">
                                    <div className="w-full h-full bg-slate-100 rounded-full border-2 border-white overflow-hidden">
                                        <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${user?.name || 'Felix'}`} alt="User" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Dynamic Route Content */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 relative">
                    {/* Abstract Grid Background */}
                    <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

                    {/* Abstract background shared across dashboard pages */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#6C5CE7]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
