import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";
import Header from "./src/components/Header";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./src/screens/HomePage";
import CategoryPage from "./src/screens/CategoryPage";
import RecipePage from "./src/screens/RecipePage";
import TabContainer from "./src/screens/TabContainer";


const Stack = createNativeStackNavigator();

const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff'
  },
}

const Navigation = () => {
	return (
		<NavigationContainer theme={appTheme}>
			<Stack.Navigator
				screenOptions={{ contentStyle: { backgroundColor: "white" } }}
			>
				<Stack.Screen
					name='HomeApp'
					component={TabContainer}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='Category'
					component={CategoryPage}
					// options = {{}}
				/>
				<Stack.Screen name='RecipePage' component={RecipePage} />
		
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
