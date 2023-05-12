import axios from 'axios';
import React, { useEffect, useLayoutEffect } from 'react'
import { ActivityIndicator, Dimensions, FlatList, ScrollView, StyleSheet, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import CartPopular from '../components/CartPopular';
import { fetchCategoryRecipes } from '../reducers/dataSlice';

const numColumns = 2;
const screenWidth = Dimensions.get("window").width;

const CategoryPage = ({navigation, route}) => {
  const { id } = route.params;
  const dispatch = useDispatch();
  const categoryRecipes = useSelector((state) => state.recipies.categoryRecipes);
  const categoryLoading = useSelector((state) => state.recipies.categoryLoading);

  useEffect(()=>{
    dispatch(fetchCategoryRecipes(id))
  },[id])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text>{id}</Text>,
    });
  }, [navigation, id]);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:15}}>
    {categoryLoading ? (
        <ActivityIndicator style={{ flex: 1 }} />
      ) : (
    <FlatList
				data={categoryRecipes}
				renderItem={({ item }) => {
					return (
							<CartPopular
								item={item}
							/>
					);
				}}
				numColumns={numColumns}
				showsVerticalScrollIndicator={false}
				style={styles.container}
				columnWrapperStyle={{gap: 10, marginVertical: 10}}
				pagingEnabled
			/>)}
    </ScrollView>
  )
}


const styles = StyleSheet.create({
	container: {
		width: screenWidth,
	}
});

export default CategoryPage