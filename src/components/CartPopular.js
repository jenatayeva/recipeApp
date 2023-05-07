import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'



const CartPopular = ({source, text}) => {  
  const handlePress = () => {
  console.log('Pressed')
}
return (
  <View style={styles.cartBox}>
    <Pressable onPress={handlePress} style={styles.pressableCart}>
      <Image source={source} style={{width: '100%', height: '100%', borderRadius: 10}} />
      <Text style={styles.innerText}>{text}</Text>
    </Pressable>
  </View>
)
}


const styles = StyleSheet.create({
  cartBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 'auto',
    flexDirection: 'column',
  },
  pressableCart: {
    width: '100%',
    height: 150,
  },
  innerText:{
    fontWeight: "600",
    fontSize: "20",
  }
})

export default CartPopular