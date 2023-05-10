//Importing Libraries
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//Importing Screens
import { HomeScreen } from "./Screens/HomeScreen";
import { ProfileScreen } from "./Screens/ProfileScreen";
import { FollowersScreen } from "./Screens/FollowersScreen";

//Create Stack navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    //Add the Screens to the Stack navigator
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* //Render the navigator with the initial route to Home */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Followers" component={FollowersScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
