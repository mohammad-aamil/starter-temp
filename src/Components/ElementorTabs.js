import React from 'react'
import Tabs from './Tabs'
import { ThemesDemos } from './ThemesDemos'
import { ThemesPro } from './ThemesPro'
export const ElementorTabs = () => {
    return (
        <>
        <div className='section-title'>
            <h3>Elementor Demos </h3>
        </div>
        <Tabs>
            Themes Demos
            <ThemesDemos/>
            Themes pro
            <ThemesPro/>
        </Tabs>
        </>
    )
}

