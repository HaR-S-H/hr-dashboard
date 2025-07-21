"use client"
import React, { useContext } from 'react'
import { AppContext } from '@/context/AppContext'
function page() {
    const { state, dispatch } = useContext(AppContext);
    console.log(state.currentEmployee);
    
  return (
    <div>

    </div>
  )
}

export default page
