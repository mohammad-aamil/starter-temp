import React from 'react'
import {NavLink} from 'react-router-dom'
export const Header = () => {
    return (
        <div className='header'>
            <div className='row'>
                <div className='header-left'>
                    <div className='theme-logo'>
                        <span>Enn</span>
                    </div>
                </div>
                <div className='header-right'>
                <div class="dropdown">
                    <input type="checkbox" id="my-dropdown" value="" name="my-checkbox"/>
                    <label for="my-dropdown"
                        data-toggle="dropdown">
                    Selected
                    </label>
                    <ul>
                        <li><NavLink className='nav-link' to="/block-editor">Block Editor</NavLink></li>
                        <li><NavLink className='nav-link' to="/elementor">Elementor</NavLink></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}
