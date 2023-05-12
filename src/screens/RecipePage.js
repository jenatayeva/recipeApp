import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import {
	ScrollView,
	View,
	Image,
	Text,
	StyleSheet,
	Linking,
	Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { fetchSelectedRecipe, setFavoriteRecipe } from "../reducers/dataSlice";

const RecipePage = ({route}) => {
  const { id } = route.params;
	const dispatch = useDispatch()
	const navigation = useNavigation();
	const selectedRecipe = useSelector((state) =>  state.recipies.selectedRecipe)
	const favoriteRecipes = useSelector((state) =>  state.recipies.favoriteRecipes)

  useEffect(() => {
		dispatch(fetchSelectedRecipe(id))
  }, [])

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: () => <Text numberOfLines={1}>{selectedRecipe.strMeal}</Text>,
		});
	}, [navigation, selectedRecipe]);


	const ingredients = useMemo(() => {
		return Array(20).fill(null).map((item, index) => {
			const strIngredient = selectedRecipe[`strIngredient${index+1}`]
			const strMeasure = selectedRecipe[`strMeasure${index+1}`]
			if(!strIngredient) return null 
			return(
				<View style={styles.ingredientText} key={index}>
					<Text style={styles.text}>{strIngredient}</Text>
					<Text style={styles.measurementText}>{strMeasure}</Text>
			</View>
			)
		})
	}, [selectedRecipe])

  const onHandleLike = () => {
		dispatch(setFavoriteRecipe(selectedRecipe))
  }


	const active = useMemo(() => {
		return favoriteRecipes.findIndex(r => r.idMeal === selectedRecipe.idMeal) !== -1 ? true : false;
		}
		, [favoriteRecipes, selectedRecipe])


	return (
		<ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:15}}>
			<View style={styles.image}>
				<Image
					style={{ width: "100%", height: "100%" }}
					source={{
						uri: selectedRecipe.strMealThumb,
					}}
					style={{ width: "100%", height: "100%", borderRadius: 10 }}
				/>
			</View>
			<View style={{ marginVertical: 10 }}>
				<View
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						flexDirection: "row",
					}}
				>
        <View style={{flexDirection: 'column'}}>
					<Text style={styles.text}>
						<Feather name='map-pin' size={16} color='#023047' />
						{selectedRecipe.strArea}
					</Text>
					<Text style={styles.textName}>Category: {selectedRecipe.strCategory}</Text>
          </View>
					<Pressable onPress={onHandleLike} >
					 {active ? 
            <MaterialCommunityIcons name="cards-heart" size={24} color="#d00000" />:
            <MaterialCommunityIcons  name="cards-heart-outline" size={24} color="#023047" />
          }
					</Pressable>
				</View>

				<Text style={styles.textOrange}>Ingredients:</Text>

				<View>
					{ingredients}
				</View>

				<Text style={styles.textOrange}>Instructions:</Text>

				<View
					style={{
						marginVertical: 10,
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<Feather
						name='youtube'
						size={20}
						color='#023047'
						style={{ marginRight: 10 }}
					/>
					<Text
						style={styles.text}
						onPress={() =>
							Linking.openURL(selectedRecipe.strYoutube)
						}
					>
						Watch on youtube
					</Text>
				</View>

				<Text style={styles.text}>
					{selectedRecipe.strInstructions}
				</Text>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 300,
	},
	textName: {
		color: "#023047",
		fontSize: 16,
		fontWeight: 300,
		letterSpacing: 1.5,
		marginVertical: 5,
	},
	textOrange: {
		color: "#ffb703",
		fontSize: 16,
		fontWeight: 600,
		letterSpacing: 1.5,
		marginVertical: 5,
	},
	text: {
		color: "#023047",
		fontSize: 16,
		fontWeight: 300,
		marginVertical: 1.5,
	},
	ingredientText: {
		flexDirection: "row",
	},
	measurementText: {
		paddingLeft: 15,
		color: "#023047",
		fontSize: 16,
		fontWeight: 300,
		marginVertical: 1.5,
	}
});

export default RecipePage;
