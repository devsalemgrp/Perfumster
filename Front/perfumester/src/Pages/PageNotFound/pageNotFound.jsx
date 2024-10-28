import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div class="min-h-screen bg-[#313131] flex items-center justify-center text-center">
  <div class="text-white p-8">
    <h1 class="text-8xl font-bold text-[#e63946] drop-shadow-lg mb-4">404</h1>
    <h2 class="text-3xl font-semibold text-[#f1faee] mb-4">Page Not Found</h2>
    <p class="text-lg text-[#a8dadc] mb-8">Sorry, the page you're looking for doesn't exist.</p>
    
    <Link
      to="/"
      >
      <h1 class="inline-block px-6 py-3 bg-[#457b9d] text-white rounded-md transition duration-300 ease-in-out hover:bg-[#1d3557] text-lg">Go to Home</h1>
    </Link>
  </div>
</div>


  )
}

export default PageNotFound