import React from 'react'
import {NavLink} from 'react-router-dom'
import ScreenShot from '../assets/screenshot1.jpg'


export const ThemesDemos = () => {
  return (
    <div className='Themes-grid'>
      <div className='grid-wrap grid-3'>
      <div className='grid-item select-demos'>
          <div className='grid-item-images'>
            <img src={ScreenShot} />
          </div>
          <div className='grid-item-content'>
            <a>
              <h5>Agenncy up</h5>
              <p>Photography WordPress Theme</p>
            </a>
          </div>
          <div className='grid-item-overlay  '>
            <ul>
              <li>
              <NavLink className='demos-link' to="/id=1">Import</NavLink>
              </li>
              <li>
              <NavLink className='demos-link' to="">Preview</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className='grid-item select-demos'>
          <div className='grid-item-images'>
            <img src={ScreenShot} />
          </div>
          <div className='grid-item-content'>
            <a>
              <h5>Agenncy up</h5>
              <p>Photography WordPress Theme</p>
            </a>
          </div>
          <div className='grid-item-overlay  '>
            <ul>
              <li>
              <NavLink className='demos-link' to="/id=1">Import</NavLink>
              </li>
              <li>
              <NavLink className='demos-link' to="">Preview</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className='grid-item select-demos'>
          <div className='grid-item-images'>
            <img src={ScreenShot} />
          </div>
          <div className='grid-item-content'>
            <a>
              <h5>Agenncy up</h5>
              <p>Photography WordPress Theme</p>
            </a>
          </div>
          <div className='grid-item-overlay  '>
            <ul>
              <li>
              <NavLink className='demos-link' to="/id=1">Import</NavLink>
              </li>
              <li>
              <NavLink className='demos-link' to="">Preview</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className='grid-item select-pro'>
          <div className='grid-item-images'>
            <img src={ScreenShot} />
          </div>
          <div className='grid-item-content'>
            <a>
              <h5>Agenncy up</h5>
              <p>Photography WordPress Theme</p>
            </a>
          </div>
          <div className='grid-item-overlay  '>
            <ul>
              <li>
                <a>Import</a>
              </li>
              <li>
                <a>Preview</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='grid-item select-demos'>
          <div className='grid-item-images'>
            <img src={ScreenShot} />
          </div>
          <div className='grid-item-content'>
            <a>
              <h5>Agenncy up</h5>
              <p>Photography WordPress Theme</p>
            </a>
          </div>
          <div className='grid-item-overlay  '>
            <ul>
              <li>
              <NavLink className='demos-link' to="/id=1">Import</NavLink>
              </li>
              <li>
              <NavLink className='demos-link' to="">Preview</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className='grid-item select-demos'>
          <div className='grid-item-images'>
            <img src={ScreenShot} />
          </div>
          <div className='grid-item-content'>
            <a>
              <h5>Agenncy up</h5>
              <p>Photography WordPress Theme</p>
            </a>
          </div>
          <div className='grid-item-overlay  '>
            <ul>
              <li>
              <NavLink className='demos-link' to="/id=1">Import</NavLink>
              </li>
              <li>
              <NavLink className='demos-link' to="">Preview</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
