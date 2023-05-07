import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const APICategories = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const initialState={
  name: 'category',
  categories: [],
  selected: null,
  error:null,
  status: 'idle'
}

export const fetchCategories = createAsyncThunk(
  'recipies/fetchCategories',
   async() => {
     const response = await axios.get(APICategories);
    return response.data.categories
   }
)

export const popularSlice = createSlice({
  name: 'recipies',
  initialState,
  reducers: {
    getCategories: (state, action) => {
      state.categories = [action.payload]
    }
  },
  extraReducers: (builder) =>{
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        // console.log(action.payload)
        state.status = 'succeeded';
        state.categories = action.payload
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
})

export const { getCategories } = popularSlice.actions;
export const getCategory = (state) => state.category.categories;
export default popularSlice.reducer

