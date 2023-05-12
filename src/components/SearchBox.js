import React, { useCallback, useEffect, useState } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { Feather } from "@expo/vector-icons";
import {debounce} from 'lodash'
import { useDispatch } from 'react-redux';
import { fetchSearchedMeals } from '../reducers/dataSlice';


const SearchBox = () => {
  const [searchPhase, setSearchPhase] = useState()
	const dispatch = useDispatch();


  const handleOnchange = (value) => {
    setSearchPhase(value)
    changeTextDebouncer(value)
  }

  const changeTextDebouncer = useCallback(debounce((val) => dispatch(fetchSearchedMeals(val)), 500), []);

  return (
    <View style={styles.searchBox}>
      <TextInput style={styles.input} placeholder="Search recipe..." value={searchPhase} onChangeText={handleOnchange}/>
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
    // width: '100%',
    paddingVertical: 10,
    flexDirection: "row",
    backgroundColor: "#f5f3f4",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: 'space-between',
  },
  input:{
    fontSize: 20,
    marginLeft: 10,
    width: "50%",
    color: "#023047"
  },
  searchIcon:{
    color: '#023047',
    // color: '#ffb703',
    marginLeft: '90%',
    width: '10%',
    padding: 10,
    position: 'absolute'
  }
})

export default SearchBox