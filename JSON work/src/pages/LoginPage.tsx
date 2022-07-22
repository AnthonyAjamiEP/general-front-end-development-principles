import { useState, ChangeEvent, FormEvent, useContext } from 'react'
import { useNavigate, Link, Navigate } from "react-router-dom"

import { LoginParams } from '../types/auth'
import { login } from '../services/auth'
import { AuthContext } from '../contexts/Auth'


const LoginPage = () => {
    let navigate = useNavigate()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const context = useContext(AuthContext)
    const [msg, setMsg] = useState('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value }: { name: string, value: string } = event.target
        setForm({ ...form, [name]: value })
    }

    const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const res = await login(form)
        console.log(res)

        if (res.status) {
            context.isAuth = true
            navigate('/')

        } else {
            setMsg(res.msg)
        }
    }

    return (
        <form onSubmit={onSubmitHandler}>

            {msg != '' && <div>{msg}</div>}

            <div className="form-row">
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChangeHandler}
                />
            </div>

            <div className="form-row">
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={onChangeHandler}
                />
            </div>

            <div className="form-row">
                <button type='submit'>Login</button>
            </div>

            <div className="form-row">
                <Link to={'/register'}> <label>Don't have an account yet? Sign up</label></Link>
            </div>

        </form>
    )
}

export default LoginPage