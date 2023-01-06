import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <div>
            <p> THIS IS THE BLOG COMPONENT</p>
            <Link to='/'>Take me back home!</Link>
        </div>
    )
}

export default Blog
