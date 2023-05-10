import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_KEY } from "@env";
// GitHub API URL and token
const API_URL = "https://api.github.com";
const githubToken = API_KEY;
// Object containing methods for caching user data
const cacheService = {
  // Method for retrieving user data from cache or API
  getUser: async (userName) => {
    try {
      // Retrieving cached ETag header value for user data
      const storedEtag = await AsyncStorage.getItem(`user-${userName}-etag`);
      // Sending request to API with cached ETag header value
      const response = await axios.get(`${API_URL}/users/${userName}`, {
        headers: {
          Authorization: `Bearer ${githubToken}`,
          "If-None-Match": storedEtag, // Sending cached ETag value to API
        },
      });
      if (response.headers["etag"] === storedEtag) {
        // If the ETag value has not changed, return cached user data
        const cachedUser = await AsyncStorage.getItem(`user-${userName}`);
        return { user: JSON.parse(cachedUser), isCached: true };
      } else {
        // If the ETag value has changed, update cache and return new user data

        // Storing new user data in cache
        await AsyncStorage.setItem(
          `user-${userName}`,
          JSON.stringify(response.data)
        );

        // Storing new ETag value in cache
        await AsyncStorage.setItem(
          `user-${userName}-etag`,
          response.headers["etag"]
        );
        return { user: response.data, isCached: false };
      }
    } catch (error) {
      if (error.response.status === 304) {
        // If the ETag value has not changed, return cached user data
        const cachedUser = await AsyncStorage.getItem(`user-${userName}`);
        return { user: JSON.parse(cachedUser), isCached: true };
      } else {
        // If the API request fails, return an error message
        return { user: "Not Found", isCached: false };
      }
    }
  },

  // Method for clearing all cached user data
  clearCache: async () => {
    try {
      // Retrieving all cache keys
      const keys = await AsyncStorage.getAllKeys();

      // Filtering out all keys that do not pertain to user data
      const userKeys = keys.filter((key) => key.startsWith("user-"));

      // Removing all user data from cache
      await AsyncStorage.multiRemove(userKeys);
    } catch (error) {
      // If an error occurs while clearing the cache, log the error message
      console.log("Error clearing cache:", error);
    }
  },
};

// Exporting cacheService object for use in other files
export default cacheService;
