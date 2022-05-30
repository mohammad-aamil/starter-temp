import React from 'react'
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

export const ImportHeader = () => {
    let navigate = useNavigate();
  return (
    <>
            <div className='header'>
            <div className='row'>
                <div className='header-left'>
                    <div className='theme-logo'>
                        <span>Enn</span>
                    </div>
                </div>
                <div className='header-right'>
                <button className='nav-link header' onClick={() => navigate(-1)}>
                    <AiOutlineClose/>
                </button>
                </div>
            </div>
        </div>
    </>
  )
}
