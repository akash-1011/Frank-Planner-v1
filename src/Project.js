import { MoreHoriz } from '@material-ui/icons'
import React from 'react'
import './Project.css'

function Project({color, title, subtitle}) {
    return (
        <div className='project'>
            <div className='project-left'>
            <div className='color' style={{backgroundColor:`${color}`}} />
            <div className='titles'>
                <h4>{title}</h4>
                <p>{subtitle}</p>
            </div>
            </div>
            <MoreHoriz />
        </div>
    )
}

export default Project
