import React from 'react'
import Project from './Project'
import './Projects.css'

function Projects() {
    return (
        <div className='projects'>
            <Project color='#9CE4DB' title='Blog Infographic' subtitle='12 Tasks'/>
            <Project color='#F1A357' title='Nike Project' subtitle='35 Tasks'/>
            <Project color='#BF74EC' title='Envato Meetups' subtitle='12 Tasks'/>
        </div>
    )
}

export default Projects
