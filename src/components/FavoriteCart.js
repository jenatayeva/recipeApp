import React from 'react'
import { View, Image, Text, StyleSheet, Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/core";

const FavoriteCart = ({item}) => {
  const { strMealThumb, strArea, strMeal, idMeal } = item
  const navigation = useNavigation()
  const handlePress = () => {
    // console.log(idMeal)
    navigation.navigate('RecipePage', {id:idMeal})
  }
  return (
    <Pressable onPress={handlePress}>
     <View style={[styles.container, styles.shadow]}>
        <View style={styles.container_image}>
          <Image style={{width: 150, height: 100, borderRadius: 15}} source={{uri: strMealThumb}}/>
          <View style={styles.image_icon}>
          <MaterialIcons name="favorite-outline" size={20} color="#fff" />
          </View>
        </View>
        <View style={{padding: 15, flex: 1}}>
          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.text} >{strMeal}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 3}}>
            <EvilIcons name="location" size={20} color="#023047" />
            <Text style={styles.text}>
            {strArea}
            </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center', bottom: -10}}>
          <AntDesign name="star" size={14} color="#ffd000" />
          <AntDesign name="star" size={14} color="#ffd000" />
          <AntDesign name="star" size={14} color="#ffd000" />
          </View>
        </View>
      </View>
    </Pressable>
  )
}


const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    flexDirection: 'row',
    width: "95%",
    alignSelf:'center',
    height: 100,
    backgroundColor: '#fffae5',
    borderRadius: 15,
  },
  container_image:{
    position: 'relative'
  },
  image_icon:{
    position: 'absolute',
    right: -10,
    padding: 5,
    backgroundColor: '#fb8500',
    borderRadius: 50
  },
  text:{
    flex: 1,
    color: '#023047',
    fontWeight: '300',
    fontSize: 14
  },
   shadow: {
    shadowColor: '#c9a227',
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
   }
});

export default FavoriteCart