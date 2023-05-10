// Importing required modules and components
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

// A functional component for rendering when a user profile is not found
const ProfileNotFound = ({ user, navigation }) => {
  return (
    <View style={styles.userContainer}>
      {/* An avatar for displaying user image */}
      <View style={styles.avatar}>
        <Feather name="user-x" size={60} color="#fff" />
      </View>
      {/* A message indicating that no user profile was found */}
      <Text style={styles.name}>No User Found</Text>
    </View>
  );
};

export default ProfileNotFound;

// Styles for the ProfileNotFound component
const styles = StyleSheet.create({
  userContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    color: "red",
  },
});
