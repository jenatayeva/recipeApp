import React, { useEffect } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import Cart from "../components/Cart";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../reducers/dataSlice";
import CartPopular from "../components/CartPopular";

const numColumns = 2;
const screenWidth = Dimensions.get("window").width;

const HomePage = () => {
	const categories = useSelector((state) => state.recipies.categories);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCategories());
	}, []);
	// console.log(popular)

	return (
		<View>
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
							/>
						</View>
					);
				}}
				horizontal
				showsHorizontalScrollIndicator={false}
				pagingEnabled
			/>
			<Text
				style={{
					fontWeight: "600",
					fontSize: 20,
					letterSpacing: 2,
					marginVertical: 20,
					color: "#023047",
				}}
			>
				Popular Delicacies
			</Text>

			<FlatList
				data={categories}
				renderItem={({ item }) => {
					<View style={styles.item}>
						<CartPopular
							source={{ uri: item.strCategoryThumb }}
							text={item.strCategory}
						/>
					</View>;
				}}
				numColumns={numColumns}
				keyExtractor={(item) => item.idCategory}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.container}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: screenWidth,
		justifyContent: "space-between",
		padding: 16,
	},
	item: {
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 4,
		flexBasis: (screenWidth - 48) / numColumns,
	},
});

export default HomePage;
