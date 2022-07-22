import React, { useContext } from 'react'
import { AuthContext } from '../contexts'

const Home = () => {
    const auth = useContext(AuthContext)

    return (<>
        <h1>
            Welcome to your Dashboard, {auth.name}
        </h1>
    </>)
}

export default Home