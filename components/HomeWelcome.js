// Importing required modules and components
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

// Defining a functional component called WelcomeProfile with destructured navigation prop
const HomeWelcome = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.welcomeContainer}>
        {/* Creating a view for github logo */}
        <View style={styles.avatar}>
          {/* Adding Feather icon with "github" name, size of 60 and white color */}
          <Feather name="github" size={60} color="#fff" />
        </View>
        {/* Adding a text component for the welcoming message */}
        <Text style={styles.welcome}>Welcome to Github Lookup</Text>
        {/* Adding a text component for the wecoming content */}
        <Text style={styles.content}>A React Native App by Craig Sullivan</Text>
      </View>
    </View>
  );
};
export default HomeWelcome;

const styles = StyleSheet.create({
  welcomeContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0083B0",
  },
  welcome: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 5,
    color: "#000",
  },
  content: {
    fontSize: 16,
    color: "#555",
  },
});
