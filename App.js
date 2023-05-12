import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './Navigation';
import { store } from './src/reducers';
import CategoryPage from './src/screens/CategoryPage';
// import CategoryPage from './src/screens/CategoryPage';
// import HomePage from './src/screens/HomePage';

export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <Navigation/>
      {/* <HomePage/> */}
      {/* <CategoryPage/> */}
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
		flex: 1,
  },
});
