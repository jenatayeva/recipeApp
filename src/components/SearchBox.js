import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { Feather } from "@expo/vector-icons";


const SearchBox = ({ searchPhase, setSearchPhase}) => {
  return (
    <View style={styles.searchBox}>
      <TextInput style={styles.input} placeholde="Search recipe..." value={searchPhase} onChange={setSearchPhase}/>
      <Feather
          name="search"
          size={20}
          color="black"
          style={styles.searchIcon}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  searchBox: {
    marginTop: 10,
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: 'space-between',
    // position: 'relative'
  },
  input:{
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
    color: "#023047"
  },
  searchIcon:{
    color: '#fff',
    backgroundColor: '#ffb703',
    width: '10%',
    marginLeft: -10,
    // position: 'absolute',
  }
})

export default SearchBox