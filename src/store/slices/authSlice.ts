// slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  email: string | null;
  password: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  email: null,
  password: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login: (state, action: PayloadAction<{ email: string; password: string }>) => {
        const { email, password } = action.payload;
        console.log("Login action dispatched:", email, password); // Debug log
        
  
        if ( password === "admin") { // Check for role and password
          state.email = email;
          state.password = password;
          state.isAuthenticated = true;
          localStorage.setItem("access", String(email));
          localStorage.setItem("refresh", String(email));
          console.log("User authenticated and localStorage updated."); // Debug log
        } else {
          console.log("Authentication failed."); // Debug log
        }
      },
      logout: (state) => {
        state.email = null;
        state.password = null;
        state.isAuthenticated = false;
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
      },
    },
  });
  

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
