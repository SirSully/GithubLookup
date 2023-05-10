// Importing required modules and components
import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

// Defining a functional component named FollowerItemSkeleton
const FollowerItemSkeleton = ({ follower, onPress }) => {
  // Render follower avatar, icon and username
  return (
    <TouchableOpacity
      onPress={() => onPress(follower)}
      style={styles.container}
    >
      <Image style={styles.avatar} source={{}} />
      <Feather name="github" size={25} color="#ccc" />
      <Text style={styles.username}>{}</Text>
    </TouchableOpacity>
  );
};

// Export FollowerItemSkeleton component as default
export default FollowerItemSkeleton;

// Styles for FollowerItemSkeleton
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
    marginLeft: 5,
    fontSize: 20,
    width: 150,
    backgroundColor: "#ddd",
  },
});
