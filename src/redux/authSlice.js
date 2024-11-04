import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const response = await axios.post("https://api-doc-tht.nutech-integrasi.com/login", {
          email,
          password,
        });
        return response.data; 
      } catch (error) {
        return rejectWithValue(error.response.data.message || "Login failed");
      }
    }
  );

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async ({ email, firstName, lastName, password }, { rejectWithValue }) => {
      try {
        const response = await axios.post("https://api-doc-tht.nutech-integrasi.com/registration", {
          email,
          first_name: firstName,
          last_name: lastName,
          password,
        });
        return response.data; 
      } catch (error) {
        return rejectWithValue(error.response.data.message || "Gagal melakukan registrasi.");
      }
    }
  );

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message || "Login failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
