import { create } from 'zustand'

const useAuth = create((set) => ({
  user: null,
  token: localStorage.getItem('token'),
  login: (user, token) => {
    localStorage.setItem('token', token);
    localStorage.setItem('token_time', Date.now());
    set({ user, token });
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('token_time');
    set({ user: null, token: null });
  },
}));

export default useAuth