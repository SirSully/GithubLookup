import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, RefreshControl } from "react-native";
//Import External Components
import FollowerItem from "../components/FollowerItem";
import FollowerItemSkeleton from "../components/FollowerItemSkeleton";
//Import External Service
import { getFollowers } from "../services/followService";

export function FollowersScreen({ navigation, route }) {
  // Get the username and the role from the navigation route
  const username = route.params?.username;
  const role = route.params?.role;

  // Set up the state variables for the followers and refreshing
  const [followers, setFollowers] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  // Handle the refreshing of the followers list
  const onRefresh = async () => {
    setRefreshing(true);
    await getFollowers(username, role).then((data) => setFollowers(data));
    setRefreshing(false);
  };

  useEffect(() => {
    // Set the title of the screen based on the role
    if (role === "following") {
      navigation.setOptions({
        title: `Following`,
      });
    } else {
      navigation.setOptions({
        title: `Followers`,
      });
    }

    // Get the followers data and set it in the state
    getFollowers(username, role).then((data) => setFollowers(data));
  }, [username]);

  // Handle the press of a follower item to navigate to their profile
  const handleFollowerPress = (follower) => {
    navigation.push("Profile", { userName: follower.login });
  };

  // Create an array of skeleton components to display when the data is being fetched
  const skeletons = [];
  for (let i = 0; i < 30; i++) {
    skeletons.push(<FollowerItemSkeleton key={i} />);
  }

  return (
    <>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* If the followers data is available, display the follower items */}
        {followers ? (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            {followers.map((follower) => (
              <FollowerItem
                key={follower.id}
                follower={follower}
                onPress={handleFollowerPress}
              />
            ))}
          </View>
        ) : (
          // If the followers data is not available, display the skeletons
          <View>{skeletons}</View>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
