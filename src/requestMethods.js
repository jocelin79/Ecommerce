import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGQ0OTMzZTJjOGI3MzQ5NDg5OWJmYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzU5OTc3OCwiZXhwIjoxNjUzODU4OTc4fQ.IKSt1CVSbJQrOOCU6peVMR5l_rvUCNNFxdwBcEO5yAs"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header:{token:`Bearer ${TOKEN}`}
})