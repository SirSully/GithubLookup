import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
//Import External Component
import HomeWelcome from "../components/HomeWelcome";

// Define the HomeScreen component that takes in the navigation prop
export function HomeScreen({ navigation }) {
  // Define a state variable and its initial value using useState hook
  const [searchText, setSearchText] = useState("");

  // Define a function that handles search and updates the navigation state
  const handleSearch = () => {
    navigation.push("Profile", { userName: searchText });
  };

  // Render the component UI
  return (
    <View style={styles.container}>
      {/* Search bar container */}
      <View style={styles.searchContainer}>
        {/* Search button */}
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Icon name="search" size={24} color="#222" />
        </TouchableOpacity>
        {/* Search input */}
        <TextInput
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Enter Github Username"
          onSubmitEditing={handleSearch}
          placeholderTextColor="#777"
        />
      </View>
      {/* Welcome profile component */}
      <HomeWelcome />
      {/* Background square container */}
      <View style={styles.squareContainer}>
        <ImageBackground
          source={require("../assets/GHbg.webp")}
          style={{ flex: 1 }}
        />
      </View>
    </View>
  );
}

// Define the component styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.85)",
    borderRadius: 50,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    marginBottom: 55,
  },
  searchButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
  },
  searchInput: {
    height: 40,
    width: "80%",
    paddingHorizontal: 10,
    marginVertical: 10,
    color: "#222",
    fontSize: 18,
    fontWeight: "400",
  },
  squareContainer: {
    height: 300,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    zIndex: -1,
  },
});
