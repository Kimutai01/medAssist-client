import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { loginSuccess } from "./userSlice";
const personalInfoFromStorage = localStorage.getItem("personalInfo");

const initialState = {
  userDetails: {},
  personalInfo: personalInfoFromStorage
    ? JSON.parse(shippingAddressFromStorage)
    : {},
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    const {
      user: { user },
    } = getState();
    const { token } = user;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(
      `https://74ca-105-163-0-112.ngrok-free.app/api/users/${id}/`,
      config
    );

    dispatch(userDetails(data));
  } catch (error) {
    console.error("Error updating profile:", error);
  }
};

export const updateUserProfile = (userr) => async (dispatch, getState) => {
  try {
    const {
      user: { user },
    } = getState();
    const { token } = user;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.put(
      "https://74ca-105-163-0-112.ngrok-free.app/api/users/profile/update/",
      userr,
      config
    );
    dispatch(loginSuccess(data));
    dispatch(userDetails(data));
    dispatch(updateUser(data));
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.error("Error updating profile:", error);
  }
};

export const savePersonalInfo = (data) => async (dispatch) => {
  try {
    dispatch(personalInfo(data));
    localStorage.setItem("personalInfo", JSON.stringify(data));
  } catch (error) {
    console.error("Error saving personal info:", error);
  }
};

export const updateUserProfileAdmin = (userr) => async (dispatch, getState) => {
  try {
    const {
      user: { user },
    } = getState();
    const { token } = user;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.put(
      `https://74ca-105-163-0-112.ngrok-free.app/api/users/update/${userr.id}/`,
      userr,
      config
    );
    dispatch(getUserDetails(userr.id));
  } catch (error) {
    console.error("Error updating profile:", error);
  }
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    userDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    updateUser: (state, action) => {
      state.userDetails = action.payload;
    },
    userDetailReset: (state) => {
      state.userDetails = {};
    },

    personalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
  },
});

export const { userDetails, updateUser, userDetailReset, personalInfo } =
  profileSlice.actions;

export const selectUserDetails = (state) => state.userDetails.userDetails;
export const selectPersonalInfo = (state) => state.personalInfo.personalInfo;

export default profileSlice.reducer;
