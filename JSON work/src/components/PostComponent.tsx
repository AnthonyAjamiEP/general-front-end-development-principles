import React, { useEffect, useState } from 'react'
import { directive } from 'vue/types/umd'

const PostComponent = () => {

    type Post = {
        userId: number,
        id: number,
        title: string,
        body: string
    }

    type PostResponseJson = {
        result: Post[],
        total: number
    }

    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPost] = useState([])

    useEffect(() => {
        const getData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const responseJson = await res.json()
            setPost(responseJson)
            console.log(responseJson)
        }

        getData()
    }, [])

    return (<>
        <div id='listofposts'>List of Posts:</div>
        <ul id='posts'>
            {posts.map((post: Post, index) =>
                <li className='post' key={`post-${index}`}>
                    {"Post ID: " + post.id + " Title: " + post.title + " Body: " + post.id}
                </li>)
            }
        </ul>
    </>)
}

export default PostComponent