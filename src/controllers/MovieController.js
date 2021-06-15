import axios from 'axios'
import { apiUrl } from '../utils/Constants'

export const getMovies = async (fields, name) => {
    try {
        const params = {}
        if (fields) params.fields = fields.join(',')
        if (name) params.name = name

        return await axios.get(`${apiUrl}/movies`, { params })
    } catch (error) {
        console.error(error.message)
    }
}

export const createMovie = async (params) => {
    try {
        return await axios.post(`${apiUrl}/movies`, null, { params })
    } catch (error) {
        console.error(error.message)
    }
}

export const updateMovie = async (id, params) => {
    try {
        return await axios.put(`${apiUrl}/movies/${id}`,null ,{ params })
    } catch (error) {
        console.error(error.message)
    }
}

export const deleteMovie = async (id) => {
    try {
        return await axios.delete(`${apiUrl}/movies/${id}`)
    } catch (error) {
        console.error(error.message)
    }
}

export const getMovieJoin = async () => {
    try {
        return await axios.get(`${apiUrl}/movies/join`)
    } catch (error) {
        console.error(error.message)
    }
}

export const getNumMovie = async () => {
    try {
        return await axios.get(`${apiUrl}/movies/rownum`)
    } catch (error) {
        console.error(error.message)
    }
}

