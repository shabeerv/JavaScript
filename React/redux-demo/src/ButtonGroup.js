import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { setTechnology } from "./reducers/technologyReducer";

const ButtonGroup = ({ technologies }) => {
    const tech = useSelector((state) => state.technology.tech)
    const text = useSelector((state) => state.technology.text)
    console.log(tech)
    const dispatch = useDispatch()
    return (
        <div>
            {technologies.map((tech, i) => (
                <button
                    data-tech={tech}
                    key={`btn-${i}`}
                    className="hello-btn"
                    onClick={() => dispatch(setTechnology(tech))}
                >
                {tech}
                </button>
            ))}
        </div>
    )
}

export default ButtonGroup;