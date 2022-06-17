import React, { useEffect, useState } from 'react'

const PostComponent = () => {

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
        <ul>
            {posts.map((post, index) =>
                <li key={`post-${index}`}>
                    {"Post ID: " + post.id + " Title: " + post.title + " Body: " + post.id}
                </li>)
            }
        </ul>
    </>)
}

export default PostComponent