import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const advertsUrl = 'http://127.0.0.1:8000/api/adverts';
const initialState = {
  adverts: [],
  status: 'idle',
  error: null,
  createdAdverts: {},
  advert: {},
};

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAdverts',
  async () => {
    const response = await axios.get(advertsUrl);
    return response.data;
  },
);

export const fetchAdvertsById = createAsyncThunk(
  'adverts/fetchAdvertsById',
  async (id) => {
    const response = await axios.get(`${advertsUrl}/${id}`);
    return response.data;
  },
);

export const updateAdvertsById = (adverts) => async (dispatch, getState) => {
  try {
    const {
      user: { user },
    } = getState();
    const { token } = user;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.put(`${advertsUrl}/update/${adverts._id}/`, adverts, config);
    dispatch(fetchAdverts());
  } catch (error) {
    console.error('Error updating product:', error);
  }
};

export const deleteAdvertsById = (id) => async (dispatch, getState) => {
  try {
    const {
      user: { user },
    } = getState();
    const { token } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios.delete(`${advertsUrl}/delete/${id}`, config);
    dispatch(deleteAdverts(id));
    dispatch(fetchAdverts());
  } catch (error) {
    console.error('Error deleting product:', error);
  }
};

export const createdNewAdverts = () => async (dispatch, getState) => {
  try {
    const {
      user: { user },
    } = getState();
    const { token } = user;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.post(`${advertsUrl}/create/`, {}, config);
    dispatch(fetchAdverts());
    dispatch(createAdverts(data));
  } catch (error) {
    console.error('Error creating product:', error);
  }
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    createAdverts: (state, action) => {
      state.createdAdverts = action.payload;
    },
    createAdvertsReset: (state) => {
      state.createdAdverts = {};
    },
    deleteAdverts: (state, action) => {
      state.adverts = state.adverts.filter(
        (adverts) => adverts._id !== action.payload,
      );
    },
  },
  extraReducers: {
    [fetchAdverts.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchAdverts.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.adverts = action.payload;
    },
    [fetchAdverts.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [fetchAdvertsById.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchAdvertsById.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.advert = action.payload;
    },
    [fetchAdvertsById.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default advertsSlice.reducer;

export const { deleteAdverts } = advertsSlice.actions;
export const { createAdverts } = advertsSlice.actions;
export const { createAdvertsReset } = advertsSlice.actions;
export const selectAllAdverts = (state) => state.adverts.adverts;
export const selectSingleAdverts = (state) => state.adverts.advert;
export const getAdvertsStatus = (state) => state.adverts.status;
export const getAdvertsError = (state) => state.adverts.error;
export const getCreatedAdverts = (state) => state.adverts.createdAdverts;
