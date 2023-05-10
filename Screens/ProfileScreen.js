import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  RefreshControl,
  Button,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
//Import External Components
import Profile from "../components/Profile";
import ProfileSkeleton from "../components/ProfileSkeleton";
import ProfileNotFound from "../components/ProfileNotFound";
//Import External Services
import cacheService from "../services/cacheService";

export function ProfileScreen({ navigation, route }) {
  const [user, setUser] = useState(null); // state to hold user data
  const [refreshing, setRefreshing] = useState(false); // state to indicate whether the screen is refreshing
  const [isCached, setIsCached] = useState(false); // state to indicate whether the data is cached or not
  const { userName } = route.params; // get the username parameter from the route object

  // function to fetch user data
  const fetchUser = async () => {
    try {
      const { user, isCached } = await cacheService.getUser(userName); // call getUser method from cacheService
      setUser(user); // set the user state to the user data returned from getUser method
      setIsCached(isCached); // set isCached state to the value returned from getUser method
    } catch (error) {
      setUser("Not Found"); // if an error occurs, set the user state to "Not Found"
    }
  };

  // call fetchUser function when the component mounts
  useEffect(() => {
    fetchUser();
  }, []);

  // function to handle refreshing of the screen
  const onRefresh = async () => {
    setRefreshing(true); // set refreshing state to true
    await fetchUser(); // call fetchUser method
    setRefreshing(false); // set refreshing state to false
  };

  // function to clear the cache
  const clearCache = async () => {
    await cacheService.clearCache(); // call clearCache method from cacheService
    setIsCached(false); // set isCached state to false
  };
  return (
    <View style={{ height: "100%" }}>
      {/* Show a message if data is being used from cache */}
      {isCached ? (
        <View style={styles.cacheAlertContainer}>
          <View style={styles.cacheAlert}>
            <Icon
              name="hard-drive"
              size={24}
              color="#222"
              style={{ padding: 10 }}
            />
            <View style={styles.textContainer}>
              <Text style={{ fontSize: 16 }}>Used Cached User Data</Text>
              <TouchableOpacity onPress={clearCache}>
                <Text style={{ color: "blue" }}>Clear Cache</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : null}

      {/* Show background image */}
      <View style={styles.squareContainer}>
        <ImageBackground
          source={require("../assets/GHbg.webp")}
          style={{ flex: 1 }}
        />
      </View>
      {/* Show user profile */}
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#FFF"
          />
        }
      >
        <View style={{ height: 130, width: "100%" }}></View>
        {user ? ( // if user data is available
          user === "Not Found" ? ( // if user data is "Not Found"
            <ProfileNotFound />
          ) : (
            <Profile user={user} navigation={navigation} />
          )
        ) : (
          <ProfileSkeleton /> // show skeleton view when user data is being fetched
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  squareContainer: {
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    zIndex: -1,
  },
  cacheAlertContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  cacheAlert: {
    color: "red",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.85)",
    margin: 5,
    marginBottom: 40,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 50,
    padding: 10,
    flexDirection: "row",
  },
  textContainer: {
    flexDirection: "column",
    flex: 1,
  },
});
