import axios from "axios";

export async function getUserInfo(username) {
  // Header with Auth for getting user info
  const options = {
    method: "GET",
    url: `https://api.github.com/users/${username}`,
    headers: {
      Authorization:
        "Bearer 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",
    },
  };
  try {
    const response = await axios.request(options);
    return response;
  } catch (error) {
    return { success: false, message: error.message };
  }
}
