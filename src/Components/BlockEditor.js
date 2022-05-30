import React from 'react'
import { BlockTabs } from './BlockTabs'
import { Footer } from './Footer'
import { Header } from './Header'

export const BlockEditor = () => {
  return (
    <>
      <Header/>
      <section className='main'>
        <div className='container'>
          <BlockTabs/>
        </div>
      </section>
      <Footer/>
    </>
  )
}

