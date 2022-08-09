import Project from "./Project";
import React from 'react';
import useFetch from "../hooks/useFetch";



const Projects = () => {

    let data = useFetch("http://localhost:3004/projects");


    const projects = data.data

    if (projects)
        console.log(data[0])

    return (<div>
        { projects && projects.map((project) => {
            return <div className="projects" key={ project.id }><Project data={ project } /></div>
        }) }
    </div>
    );
}

export default Projects;