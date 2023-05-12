import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const APICategories = "https://www.themealdb.com/api/json/v1/1/categories.php";

const initialState = {
	name: "category",
	categories: [],
	selectedRecipe: [],
	error: null,
	categoryRecipes: [],
	loading: false,
	categoryLoading: false,
	selectedLoading: false,
	favoriteRecipes: [],
	searchedMeals: []
};

export const fetchCategories = createAsyncThunk(
	"recipies/fetchCategories",
	async () => {
		const response = await axios.get(APICategories);
		return response.data.categories;
	}
);

export const fetchCategoryRecipes = createAsyncThunk(
	"recipies/fetchCategoryRecipes",
	async (id) => {
		const res = await axios.get(
			`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
		);
		return res.data.meals;
	}
);

export const fetchSelectedRecipe = createAsyncThunk(
	"recipies/fetchSelectedRecipe",
	async (id) => {
		const res = await axios.get(
			`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
		);
		return res.data.meals[0];
	}
);

export const fetchSearchedMeals = createAsyncThunk(
	'recipies/fetchSearchedMeals',
	async(name) => {
		console.log(name)
		const res = await axios.get(
			`https://www.themealdb.com/api/json/v1/1/search.php?s=${name || ''}`
		);
		return res.data.meals
	}
)

export const popularSlice = createSlice({
	name: "recipes",
	initialState,
	reducers: {
		getCategories: (state, action) => {
			state.categories = [action.payload];
		},
		setFavoriteRecipe: (state, action) => {
			if (state.favoriteRecipes.length === 0) {
				state.favoriteRecipes = [action.payload];
			} else {
				const recipeId = action.payload.idMeal;
				const favoriteRecipes = state.favoriteRecipes;
				const existingRecipe = favoriteRecipes.find(
					(r) => r.idMeal === recipeId
				);

				if (existingRecipe) {
						state.favoriteRecipes =  favoriteRecipes.filter(
							(r) => r.idMeal !== recipeId
						);
				} else {
          state.favoriteRecipes = [...favoriteRecipes, action.payload]
				}
			}
		}
		},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCategories.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchCategories.fulfilled, (state, action) => {
				state.loading = false;
				state.categories = action.payload;
			})
			.addCase(fetchCategories.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(fetchCategoryRecipes.pending, (state) => {
				state.categoryLoading = true;
			})
			.addCase(fetchCategoryRecipes.fulfilled, (state, action) => {
				state.categoryLoading = false;
				state.categoryRecipes = action.payload;
			})
			.addCase(fetchCategoryRecipes.rejected, (state, action) => {
				state.categoryLoading = false;
				state.error = action.error.message;
			})
			.addCase(fetchSelectedRecipe.pending, (state) => {
				state.selectedLoading = true;
			})
			.addCase(fetchSelectedRecipe.fulfilled, (state, action) => {
				state.selectedLoading = false;
				state.selectedRecipe = action.payload;
			})
			.addCase(fetchSelectedRecipe.rejected, (state, action) => {
				state.selectedLoading = false;
				state.error = action.error.message;
			})
			.addCase(fetchSearchedMeals.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchSearchedMeals.fulfilled, (state, action) => {
				state.loading = false;
				state.searchedMeals = action.payload;
			})
			.addCase(fetchSearchedMeals.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export const { getCategories, setFavoriteRecipe } = popularSlice.actions;
export const getCategory = (state) => state.category.categories;
export default popularSlice.reducer;
