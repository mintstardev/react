import React from 'react'
import { Container, Logo, LogoutBtn } from '../index.js'

import { Link, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'



function Header() {

  const authStatus = useSelector(state => state.authReducer.status);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus, },
    { name: "Signup", slug: "/signup", active: !authStatus, },
    { name: "All Posts", slug: "/all-posts", active: authStatus, },
    { name: "Add Post", slug: "/add-post", active: authStatus, },
  ]

  return (
    <header
      className='py-3 shadow bg-gray-500'
    >
      <Container>
        <nav className='flex justify-between'>
          <Link to="/">
            <Logo />
          </Link>
          <ul className='flex'          >
            {navItems.map(item => (
              item.active ?
                (<li key={item.name}
                >
                  <button
                    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                    onClick={() => navigate(item.slug)}
                  >{item.name}</button>
                </li>) : null
            ))}
            {authStatus && (<LogoutBtn />)}
          </ul>
        </nav>

      </Container>

    </header >
  )
}

export default Header