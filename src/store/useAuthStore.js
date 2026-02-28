import { create } from 'zustand';

// Simple authentication store for the prototype
export const useAuthStore = create((set) => ({
    user: null, // null means not logged in

    // Login function (simulates a successful login)
    login: (userData) => set({
        user: {
            name: userData.name || 'Иван',
            email: userData.email,
            id: 'EUR-' + Math.floor(Math.random() * 10000)
        }
    }),

    // Logout function
    logout: () => set({ user: null }),
}));
