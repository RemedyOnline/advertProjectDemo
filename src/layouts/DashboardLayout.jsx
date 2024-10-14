import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
    return (
        <div>
            <Sidebar />
            <Outlet />
            <div>
                Content for the rest of the page...
            </div>
        </div>
    )
}

export default DashboardLayout