import { NavLink } from 'react-router-dom'

import './project.css'


export default function Project({ title, img, index }) {
    return (
        <NavLink to={`/project/${index + 1}`}>
            <li className="project">
                <img 
                    src={ img } 
                    alt={ title } 
                    className="project__img" 
                />
                <h3 className="project__title">{ title }</h3>
            </li>
        </NavLink>
    )
}