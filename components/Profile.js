// Importing required modules and components
import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet, View } from "react-native";

const Profile = ({ user, navigation }) => {
  // Function to handle the navigation to the followers screen with the role of followers
  const handleFollowers = async () => {
    navigation.push("Followers", { username: user.login, role: "followers" });
  };

  // Function to handle the navigation to the followers screen with the role of following
  const handleFollowing = async () => {
    navigation.push("Followers", { username: user.login, role: "following" });
  };

  // Render the user profile
  return (
    <View style={{ flex: 1 }}>
      {/* The container that holds the user information */}
      <View style={styles.userContainer}>
        {/* User avatar */}
        <Image source={{ uri: user.avatar_url }} style={styles.avatar} />

        {/* User name */}
        <Text style={styles.name}>{user.name}</Text>

        {/* User login */}
        <Text style={styles.username}>{user.login}</Text>

        {/* Container to hold the followers and following counts */}
        <View style={{ flexDirection: "row" }}>
          {/* Button to navigate to the followers screen with the role of followers */}
          <TouchableOpacity
            style={styles.followTouchable}
            onPress={handleFollowers}
          >
            <Text style={styles.follow}> {user.followers}</Text>
            <Text style={styles.followLabel}>Followers</Text>
          </TouchableOpacity>

          {/* Button to navigate to the followers screen with the role of following */}
          <TouchableOpacity
            style={styles.followTouchable}
            onPress={handleFollowing}
          >
            <Text style={styles.follow}> {user.following}</Text>
            <Text style={styles.followLabel}>Following</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* The container that holds the user bio */}
      <View style={styles.bioContainer}>
        {/* The title of the bio */}
        <Text style={styles.bioTitle}>About {user.name} </Text>

        {/* The user bio */}
        <Text style={styles.description}>{user.bio}</Text>
      </View>
    </View>
  );
};
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bioContainer: {
    flex: 1,
    width: "100%",
    alignItems: "flex-start",
    padding: 10,
  },
  bioTitle: {
    fontSize: 24,
    fontWeight: 600,
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
    borderColor: "#fff",
    borderWidth: 5,
    backgroundColor: "#eee",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 5,
    color: "#000",
  },
  username: {
    fontSize: 16,
    color: "#555",
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },

  follow: {
    fontSize: 30,
    fontWeight: "700",
    color: "#666",
  },
  followLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#999",
  },
  followTouchable: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  notFound: {
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
  },
});
