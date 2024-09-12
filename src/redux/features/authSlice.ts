/* eslint-disable @typescript-eslint/no-explicit-any */
import { getUserInfo, removeUserInfo } from "@/action/authAction";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
  user: null,
  selectedItems: 0,
  total: 0,
  deliveryCharge: 15,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // logut user 
    logout: (state) => {
      state.user = null;
      removeUserInfo();
      toast.success("Logout successful", {
        className: "bg-green-500 text-white",
      });
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
