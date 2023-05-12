import React from "react";
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const numColumns = 2;
const screenWidth = Dimensions.get("window").width;

const CartPopular = ({item}) => {
  const {strMealThumb, strMeal, idMeal} = item;
  const navigation = useNavigation()

	const handlePress = () => {
		navigation.navigate('RecipePage', {id:idMeal})
	};
	return (
		<View style={styles.cartBox}>
			<Pressable onPress={handlePress} style={styles.pressableCart}>
				<Image
					source={{ uri: strMealThumb }}
					style={{ width: "100%", height: "100%", borderRadius: 10 }}
				/>
        <View style={styles.backColor}>
          <Pressable style={styles.text}>
            <View>
              <Text style={styles.name}>{strMeal}</Text>
              <Text style={styles.time}>
                <Feather name="clock" size={10} color="#fff" /> {strMeal} 
              </Text>
            </View>
            <View>
            <Feather
                name='arrow-right-circle'
                size={18}
                color='#fff'
              />
            </View>
          </Pressable>
		    </View>
			</Pressable>
    </View>
	);
};

const styles = StyleSheet.create({
	cartBox: {
    flexBasis: (screenWidth - 40) / numColumns,
		justifyContent: 'space-between',
		alignSelf: 'center'
  },
	pressableCart: {
		width: "100%",
		height: 200,
    zIndex: 0

	},
  backColor:{
    position: "absolute",
		bottom: 10,
		width: "90%",
		// height: 50,
		backgroundColor: "#495057",
		alignSelf: "center",
		opacity: "0.8",
		borderRadius: 25,
    zIndex: 0
  },
	text: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    
	},
  name: {
		fontSize: 14,
    color: '#fff',
    paddingBottom: 5,
    zIndex: 1
  },
  time: {
		fontSize: 10,
    color: '#fff',
    zIndex: 1

  }
});

export default CartPopular;
