import React from 'react'
import { projectData } from './projectsData'
import "./projects.css"

const Projects = () => {
  return (
    <div className='project-wrapper' id='projects'>
    <h1>My projects</h1>
    <div className='project-main'>
    {
        projectData.map((e)=>{
return(
  <div class="contanir">
    <img src={e.projectimage} />
      <div class="content">
        <h2>{e.title}</h2>
        <h2>(completed {e.completed})</h2>
        <p>{e.describtion}</p>
      <div className='card-buttons'>
        <a href={e.githublink}><button className='git-button'>Gitub</button></a>
        <a href={e.livedemo}> <button className='live-button'>live Demo</button></a>
       </div>
      </div>
  </div>
)
        })
    }


      
    </div>
    </div>
  )
}

export default Projects
