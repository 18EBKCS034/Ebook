import React from 'react'

export default function Header() {
  return (
    <>

    {/* header section starts   */}

    <header class="header">

        <div class="header-1">

            <a href="#" class="logo" style={{textDecoration:"none"}}> <i class="fas fa-book"></i> bookly </a>
            <div class="icons">
                <div id="search-btn" class="fas fa-search"></div>
                <a href="#" class="fas fa-heart"></a>
                <a href="#" class="fas fa-shopping-cart"></a>
                <div id="login-btn" class="fas fa-user"></div>
            </div>

        </div>

        <div class="header-2">
            <nav class="navbar1">
                <a href="#home">home</a>
                <a href="#featured">Courses</a>
                <a href="#arrivals">Categories</a>
                <a href="#arrivals">Book Summary</a>
                <a href="#blogs">Login/Signup</a>
            </nav>
        </div>

    </header>

</>
  )
}
