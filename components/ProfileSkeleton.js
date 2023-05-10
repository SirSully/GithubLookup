// Importing required modules and components
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const ProfileSkeleton = ({ user, navigation }) => {
  // Profile skeleton component that displays a user's profile information

  return (
    <View style={styles.userContainer}>
      <View style={styles.avatar}>
        <Feather name="user" size={80} color="#fff" />
      </View>
      {/* Placeholder text for user's name */}
      <Text style={styles.name}></Text>
      {/* Placeholder text for user's username */}
      <Text style={styles.username}></Text>
      {/* Placeholder text for user's description */}
      <Text style={styles.description}></Text>
      {/* Container for follow count */}
      <View style={{ flexDirection: "row" }}>
        {/* Container for follower count */}
        <View style={styles.followContainer}>
          <Text style={styles.followItem}></Text>
          <Text style={styles.followItem}></Text>
        </View>
        {/* Container for following count */}
        <View style={styles.followContainer}>
          <Text style={styles.followItem}></Text>
          <Text style={styles.followItem}></Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileSkeleton;
// Styling for the ProfileSkeleton component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  followContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  followItem: {
    width: 100,
    backgroundColor: "#eee",
    margin: 5,
  },
  searchInput: {
    height: 40,
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  userContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    width: 100,
    backgroundColor: "#eee",
  },
  username: {
    fontSize: 16,
    color: "#555",
    width: 100,
    backgroundColor: "#eee",
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
    width: 100,
    backgroundColor: "#eee",
  },
  followers: {
    fontSize: 16,
    marginVertical: 5,
    width: 100,
    backgroundColor: "#eee",
  },
  following: {
    fontSize: 16,
    marginVertical: 5,
    width: 100,
    backgroundColor: "#eee",
  },
});
