import axios from 'axios'
import { apiUrl } from '../utils/Constants'

export const getAvgRating = async () => {
    try {
        return await axios.get(`${apiUrl}/users/avgrating`)
    } catch (error) {
        console.error(error.message)
    }
}

export const getUserRateAllMovie = async () => {
    try {
        return await axios.get(`${apiUrl}/users/rateallmovie`)
    } catch (error) {
        console.error(error.message)
    }
}