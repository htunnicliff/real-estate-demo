import axios from "axios";

/**
 * Axios instance for making requests to the SimplyRETS API
 *
 * https://docs.simplyrets.com/api/
 */
export const simplyRETSAPI = () =>
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_RETS_BASE_URL,
    auth: {
      username: "simplyrets",
      password: "simplyrets",
    },
  });
