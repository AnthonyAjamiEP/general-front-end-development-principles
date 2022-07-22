import { RegisterParams, LoginParams } from '../types/auth'
import axios, { AxiosError } from 'axios'

export const register = async (data: RegisterParams): Promise<boolean> => {
    try {
        await axios.post('http://localhost:4500/register', data)
        console.log(data)
        return true
    } catch (error: any) {
        if ((error as AxiosError).response?.status === 500) {
            console.error(error.response?.data?.msg);
        } else {
            console.error(error);
        }
        return false
    }
}

export const login = async (data: LoginParams) => {
    try {
        const res = await axios.post('http://localhost:4500/login', data)
        return {
            status: true,
            email: data.email
        }

    } catch (error: any) {
        if ((error as AxiosError).response?.status === 500) {
            console.error(error.response?.data?.msg);
        } else {
            console.error(error);
        }
        return {
            status: false,
            msg: error.response?.data?.msg
        }
    }
}