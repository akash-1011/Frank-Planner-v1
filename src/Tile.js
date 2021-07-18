import { Avatar } from '@material-ui/core'
import React from 'react'
import './Tile.css'

function Tile({color,message,startDate,endDate,person,left,width}) {
    
    return (
        <div className='tile' style={{left:`${left*83}px`,width:`${width*125}px`}}>
            <div className='colour' style={{backgroundColor:`${color}`}}/>
            <div className='info'>
                <p className='info-text'>{message}</p>
                <p className='info-date'>{startDate.toLocaleDateString()}-{endDate.toLocaleDateString()}</p>
            </div>
            <Avatar src={person}/>
        </div>
    )
}

export default Tile
