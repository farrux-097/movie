import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

api.interceptors.request.use((config) => {
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2U4MjgxN2M5NDRmMGJlYmEwZDE1MWRkZWUyYjJkZCIsIm5iZiI6MTc1NTE1ODU5Ny44MDMsInN1YiI6IjY4OWQ5ODQ1NDA0YjkxODU5ZGI3MTAxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kpWiE4DyGg_kpoacJg8Cb5t5bGXOoGj557sF5VxP-M8"

    config.headers.Authorization = `Bearer ${token}`

    return config
})