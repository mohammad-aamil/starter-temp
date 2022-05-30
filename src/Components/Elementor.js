import React from 'react'
import { ElementorTabs } from './ElementorTabs'
import { Footer } from './Footer'
import { Header } from './Header'
export const Elementor = () => {
  return (
    <>
      <Header/>
      <section className='main'>
        <div className='container'>
          <ElementorTabs/>
        </div>
      </section>

      <Footer/>
    </>
  )
}
