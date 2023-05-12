import React, { useEffect } from "react";
import {
	ActivityIndicator,
	Dimensions,
	FlatList,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import Cart from "../components/Cart";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchSearchedMeals } from "../reducers/dataSlice";
import CartPopular from "../components/CartPopular";
import { useNavigation } from "@react-navigation/core";

const numColumns = 2;
const screenWidth = Dimensions.get("window").width;

const HomePage = () => {
	const categories = useSelector((state) => state.recipies.categories);
	const favoriteRecipes = useSelector(
		(state) => state.recipies.favoriteRecipes
	);
	const searchedMeals = useSelector(state =>  state.recipies.searchedMeals)
	const loading = useSelector(state =>  state.recipies.loading)

	const dispatch = useDispatch();
	const navigation = useNavigation();
	useEffect(() => {
		dispatch(fetchCategories());
		dispatch(fetchSearchedMeals())
	}, []);
	// console.log(searchedMeals)

	const handlePress = (e) => {
		navigation.navigate("Category", { id: e });
	};
	return (
		<ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:15}}>
			<Header />
			<SearchBox />
			<FlatList
				data={categories}
				renderItem={({ item }) => {
					return (
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								marginHorizontal: 5,
							}}
						>
							<Cart
								source={{ uri: item.strCategoryThumb }}
								text={item.strCategory}
								handlePress={() => handlePress(item.strCategory)}
							/>
						</View>
					);
				}}
				horizontal
				showsHorizontalScrollIndicator={false}
				pagingEnabled
				style={{ marginVertical: 15 }}
			/>
			<Text
				style={{
					fontWeight: "600",
					fontSize: 20,
					letterSpacing: 2,
					marginVertical: 15,
					color: "#023047",
				}}
			>
				Meals
			</Text>
			{loading ? (
        <ActivityIndicator style={{ flex: 1 }} />
      ) : (
				<FlatList
					data={searchedMeals}
					renderItem={({ item }) => {
						return (
							<CartPopular
								item={item}
								// source={{ uri: item.strCategoryThumb }}
								// name={item.strCategory}
								// time={item.strCategory}
							/>
						);
					}}
					numColumns={numColumns}
					showsVerticalScrollIndicator={false}
					style={styles.container}
					columnWrapperStyle={{ gap: 10,  marginVertical: 5 }}
					pagingEnabled
				/>
			)}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		width: screenWidth,
	},
});

export default HomePage;
