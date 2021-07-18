import { Apps, CalendarToday, CreditCard, Dashboard, ForumRounded, Reorder, Settings, Whatshot } from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='logo'>
                <Whatshot />
            </div>
            <div className='icons'>
                <Dashboard className='active'/>
                <Apps />
                <CalendarToday />
                <CreditCard />
                <ForumRounded />
                <Reorder />
            </div>
            <div className='setting'>
                <Settings />
            </div>
        </div>
    )
}

export default Sidebar
