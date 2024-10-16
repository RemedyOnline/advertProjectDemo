import React from 'react'
import { Outlet } from 'react-router-dom'

const GithubLayout = () => {
    return (
        <div>
            <h1>GithubLayout</h1>
            <Outlet />
        </div>
    )
}

export default GithubLayout