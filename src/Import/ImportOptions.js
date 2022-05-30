import React from 'react'
import { AiOutlineClose,AiOutlineCheck } from "react-icons/ai";
import { Footer } from '../Components/Footer';
import { ImportHeader } from './ImportHeader';

export const ImportOptions = () => {
    return (
        <>
        <ImportHeader/>
        <div className='main'>
            <div className='content-wrap'>
                <div className='content-container'>
                    <h1>Okay, just one last step…</h1>
                    <p>Tell us a little bit about yourself</p>
                    <div className='content-list'>
                        <ul>
                            <li>
                            <input type="checkbox" id="import-customizer" name="import-customizer"/>
                            <label for="import-customizer"> Import Customizer</label>
                            </li>
                            <li>
                            <input type="checkbox" id="import-widgets" name="import-widgets"/>
                            <label for="import-widgets"> Import Widgets</label>
                            </li>
                            <li>
                            <input type="checkbox" id="import-content" name="import-content"/>
                            <label for="import-content"> Import Content</label>
                            </li>
                        </ul>
                    </div>
                    <div className='content-plugin'>
                        <p>Title Name</p>
                        <ul>
                            <li>
                                <AiOutlineCheck className='icon check'/>
                                <a> Plugin Name</a>
                            </li>
                            <li>
                                <AiOutlineClose className='icon close'/> 
                                <a>Plugin Name</a>
                            </li>
                            <li>
                                <AiOutlineCheck className='icon check'/>
                                <a> Plugin Name</a>
                            </li>
                            <li>
                                <AiOutlineClose className='icon close'/> 
                                <a>Plugin Name</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
