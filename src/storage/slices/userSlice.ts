import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppUser, LoginRequest, RegisterRequest } from "api/auth/auth.types";
import { loginUser, logoutUser, registerUser } from "api/auth/auth";
import { RootState } from "storage/store";

interface UserSlice {
  user: AppUser | null;
  error: any;
}

const initialState: UserSlice = {
  user: null,
  error: null,
};

export const register = createAsyncThunk<AppUser, RegisterRequest>(
  "user/register",
  async (request) => {
    return registerUser(request);
  }
);

export const login = createAsyncThunk<AppUser, LoginRequest>(
  "user/login",
  async ({ email, password }) => {
    return loginUser(email, password);
  }
);

export const logout = createAsyncThunk("user/logout", async () => {
  return logoutUser();
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<AppUser>) {
      state.user = action.payload;
    },
    logOutUser(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action: PayloadAction<AppUser>) => {
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export const { setUser, logOutUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
export const selectUser = (state: RootState) => state.user;
