import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <p>THIS IS THE HOME COMPONENT</p>
            <Link to='/about'>about page!</Link> | <Link to='/blog'>Blog page!</Link>

        </div>
    )
}

export default Home

