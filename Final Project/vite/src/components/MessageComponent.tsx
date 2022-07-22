import React, { useEffect, useState } from 'react'
import { directive } from 'vue/types/umd'

const MessageComponent = () => {

    type Message = {
        userId: number,
        id: number,
        text: string,
        date: string
    }

    type PostResponseJson = {
        result: Message[],
        total: number
    }

    const [isLoading, setIsLoading] = useState(true)
    const [messages, setMessage] = useState([])

    useEffect(() => {
        const getData = async () => {
            const res = await fetch('http://127.0.0.1:8081/db/epita/messages')
            const responseJson = await res.json()
            setMessage(responseJson)
            console.log(responseJson)
        }

        getData()
    }, [])

    return (<>
        <div id='listofposts'>List of Messages:</div>
        <ul id='posts'>
            {messages.map((message: Message, index) =>
                <li className='post' key={`post-${index}`}>
                    {"User ID: " + message.userId + " Message: " + message.text + " Date: " + message.date}
                </li>)
            }
        </ul>
    </>)
}

export default MessageComponent