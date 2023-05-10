import axios from "axios";
import { API_KEY } from "@env";
// Setting the API URL and token for GitHub API calls
const API_URL = "https://api.github.com";
const githubToken = API_KEY;

// Function to retrieve user's followers from GitHub API
export function getFollowers(username, role) {
  return new Promise((resolve, reject) => {
    // Adding delay to show off skeleton
    setTimeout(() => {
      // Using axios to make GET request to GitHub API with username and role as parameters
      axios
        .get(`${API_URL}/users/${username}/${role}`, {
          headers: {
            Authorization: `Bearer ${githubToken}`, // Setting authorization token in the request headers
          },
        })
        .then((response) => resolve(response.data)) // Resolving promise with response data if successful
        .catch((error) => {
          console.error(error); // Logging error to console
          resolve([]); // Resolving promise with empty array if unsuccessful
        });
    }, 500); // Adding 500 milliseconds delay before making the API request
  });
}
