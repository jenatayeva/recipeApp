import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons'; 
import CategoryPage from './CategoryPage';
import FavoritesPage from './FavoritesPage';
import HomePage from './HomePage';

const Tab = createMaterialBottomTabNavigator();

const TabContainer = () => {
  return (
    <Tab.Navigator
    screenOptions={{
          tabBarLabelStyle: { paddingVertical: 10 },
          tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'green',
            style: {
              backgroundColor:  '#fffdf7'
            },
          },
    }}
    barStyle={{
      backgroundColor: '#fffdf7'
    }}
    initialRouteName="Home"
    activeColor="#fb8500"
    inactiveColor="#f9c784"
  >
   <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
   <Tab.Screen
        name="Favorites"
        component={FavoritesPage}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="favorite" size={24} color={color} />
          ),
        }}
      />
  </Tab.Navigator>
  )
}

export default TabContainer
