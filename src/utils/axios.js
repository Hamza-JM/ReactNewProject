import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://192.168.10.72:5099/api/v1",
  timeout: 5000,
  headers: {
    Authorization: "Bearer YOUR_ACCESS_TOKEN",
    "Content-Type": "application/json",
  },
});
