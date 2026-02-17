import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header';

const MainLayout = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      <Header></Header>

      <div className=''>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default MainLayout;