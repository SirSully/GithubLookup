// Importing required modules and components
import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

// Defining a functional component named FollowerItem
const FollowerItem = ({ follower, onPress }) => {
  // Returning JSX elements with follower data passed as props
  return (
    <TouchableOpacity
      onPress={() => onPress(follower)}
      style={styles.container}
    >
      <Image style={styles.avatar} source={{ uri: follower.avatar_url }} />

      <Feather name="github" size={25} color="#ccc" />
      <Text style={styles.username}>{follower.login}</Text>
    </TouchableOpacity>
  );
};

// Exporting the FollowerItem component as default
export default FollowerItem;

// Creating and exporting styles object
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    width: "100%",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    padding: 10,
    borderColor: "#fff",
    borderWidth: 2,
    backgroundColor: "#ddd",
    marginRight: 20,
  },

  username: {
    flex: 1,
    marginLeft: 5,
    fontSize: 20,
  },
});
