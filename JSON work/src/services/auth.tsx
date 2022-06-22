import { User } from '../types/user'
import axios, { AxiosError } from 'axios'

export const register = async (data: User): Promise<boolean> => {
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