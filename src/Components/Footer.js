import React from 'react'
import { useNavigate} from "react-router-dom";

export const Footer = () => {
    let navigate = useNavigate();
    return (
        <footer>
        <button className='nav-link footer' onClick={() => navigate(-1)}>
            <span>
                back
            </span>
        </button> 
        </footer>
    )
}
