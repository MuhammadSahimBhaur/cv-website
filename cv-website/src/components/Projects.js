import Project from "./Project";
import React from 'react';
import useFetch from "../hooks/useFetch";

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';






const Projects = () => {

    let data = useFetch("http://localhost:3004/projects");


    const projects = data.data

    if (projects)
        console.log(data[0])

    return (<div className="projects">
        { projects ? projects.map((project) => {
            return <div key={ project.id }><Project data={ project } /></div>
        }) :
            <div className="skeleton">
                <Stack spacing={ 1 }>
                    <div >
                        <Skeleton animation="wave" variant="rounded" width={ 700 } height={ 100 } />
                        <Skeleton animation="wave" variant="text" sx={ { fontSize: '2rem' } } />
                        <Skeleton animation="wave" variant="text" sx={ { fontSize: '2rem' } } />
                        <Skeleton animation="wave" variant="text" sx={ { fontSize: '2rem' } } />
                    </div>

                </Stack>
            </div>

        }
    </div>
    );
}

export default Projects;