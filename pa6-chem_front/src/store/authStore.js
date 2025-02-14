import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  token: localStorage.getItem('token') || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
  login: async (user, token) => {
    try {
        set({ token, user });
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        
    } catch (error) {
      console.log(error);
    }
  },
  
  logout: () => {
    set({ token: null });
    set({ user: null });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
}));