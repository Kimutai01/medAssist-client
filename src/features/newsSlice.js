import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const newsUrl = 'http://127.0.0.1:8000/api/news';
const initialState = {
  news: [],
  status: 'idle',
  error: null,
  createdNews: {},
  new: {},
};

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const response = await axios.get(newsUrl);
  return response.data;
});

export const fetchNewsById = createAsyncThunk(
  'news/fetchNewsById',
  async (id) => {
    const response = await axios.get(`${newsUrl}/${id}`);
    return response.data;
  },
);

export const updateNewsById = (news) => async (dispatch, getState) => {
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
    await axios.put(`${newsUrl}/update/${news._id}/`, news, config);
    dispatch(fetchNews());
  } catch (error) {
    console.error('Error updating product:', error);
  }
};

export const deleteNewsById = (id) => async (dispatch, getState) => {
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
    await axios.delete(`${newsUrl}/delete/${id}`, config);
    dispatch(deleteNews(id));
    dispatch(fetchNews());
  } catch (error) {
    console.error('Error deleting product:', error);
  }
};

export const createNewNews = () => async (dispatch, getState) => {
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
    const { data } = await axios.post(`${newsUrl}/create/`, {}, config);
    dispatch(fetchNews());
    dispatch(createNews(data));
  } catch (error) {
    console.error('Error creating product:', error);
  }
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    createNews: (state, action) => {
      state.createdNews = action.payload;
    },
    createNewsReset: (state) => {
      state.createdNews = {};
    },
    deleteNews: (state, action) => {
      state.news = state.news.filter((news) => news._id !== action.payload);
    },
  },
  extraReducers: {
    [fetchNews.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchNews.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.news = action.payload;
    },
    [fetchNews.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [fetchNewsById.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchNewsById.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.new = action.payload;
    },
    [fetchNewsById.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default newsSlice.reducer;

export const { deleteNews } = newsSlice.actions;
export const { createNews } = newsSlice.actions;
export const { createNewsReset } = newsSlice.actions;
export const selectAllNews = (state) => state.news.news;
export const selectSingleNews = (state) => state.news.new;
export const getNewsStatus = (state) => state.news.status;
export const getNewsError = (state) => state.news.error;
export const getCreatedNews = (state) => state.news.createdNews;
