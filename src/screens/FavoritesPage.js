import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import FavoriteCart from '../components/FavoriteCart'

const FavoritesPage = () => {
  const favoriteRecipes = useSelector(state=> state.recipies.favoriteRecipes);
  return (
    <ScrollView style={{marginHorizontal:15}}>
      {favoriteRecipes.map(item => (
        <FavoriteCart item={item}/>
      ))}
    </ScrollView>
  )
}

export default FavoritesPage