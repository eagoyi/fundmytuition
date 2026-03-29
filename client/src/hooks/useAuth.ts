import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setLoggedIn, setUser, logout, setLoginModalOpen } from '../store/slices/authSlice';
import { authService } from '../services/authService';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user, loginModalOpen } = useSelector((state: RootState) => state.auth);

  const login = async (email: string, password: string) => {
    try {
      const response = await authService.login({ email, password });
      dispatch(setUser(response.user));
      dispatch(setLoggedIn(true));
      return response;
    } catch (error) {
      console.error('[v0] Login failed:', error);
      throw error;
    }
  };

  const register = async (email: string, password: string, userType: string) => {
    try {
      const response = await authService.register({
        email,
        password,
        confirmPassword: password,
        userType: userType as 'student' | 'volunteer' | 'donor',
      });
      dispatch(setUser(response.user));
      dispatch(setLoggedIn(true));
      return response;
    } catch (error) {
      console.error('[v0] Registration failed:', error);
      throw error;
    }
  };

  const handleLogout = () => {
    authService.logout();
    dispatch(logout());
  };

  const openLoginModal = () => {
    dispatch(setLoginModalOpen(true));
  };

  return {
    isLoggedIn,
    user,
    loginModalOpen,
    login,
    register,
    logout: handleLogout,
    openLoginModal,
  };
};
