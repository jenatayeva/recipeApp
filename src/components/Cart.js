import React from 'react'
import { Image, Pressable, StyleSheet, Text, TextBase, View } from 'react-native'

const Cart = ({ source, text, handlePress }) => {
  return (
    <View style={styles.cartBox}>
    <Pressable onPress={handlePress} style={styles.image}>
      <Image source={source} style={{width: '100%', height: '100%', borderRadius: 10}} />
    </Pressable>
    <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cartBox: {
    flexDirection: 'column',
    // marginVertical: 30
  },
  image: {
    width: 70,
    height: 70,
  },
  text:{
    marginTop: 5,
    color: '#023047',
    textAlign: 'center'
  }
})

export default Cart