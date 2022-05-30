import React from 'react'
import {NavLink} from 'react-router-dom'
import { Footer } from './Footer'

export const BuilderList = () => {
    return (
        <>
        <div className='wrapper'>
            <h1>Select Page Builder</h1>
            <p>Please choose your preferred page builder from the list below.</p>
            <div className='builder-wrap'>
            <NavLink className='nav-link d-flex-center-align' to="block-editor">
                <div className='img-wrap'>
                    <img src="./images/wordpress-logo.png"/>
                </div>
                <h6>Block Editor</h6>
            </NavLink>
            <NavLink className='nav-link d-flex-center-align' to="elementor">
                <div className='img-wrap'>
                    <img src="./images/elementor.png"/>
                </div>
                <h6>Elementor</h6>
            </NavLink>
        </div>
        </div>
        <Footer/>
        </>

    )
}
