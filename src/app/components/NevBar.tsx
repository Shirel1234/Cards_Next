import React from 'react'
import ButtonLink from './Button';

const NevBar = () => {
  const routes = [
    { href: '/pages/home', text: 'Home' },
    { href: '/pages/login', text: 'Login' },
    { href: '/pages/contact', text: 'Contact' },
    { href: '/pages/reactQuery/query', text: 'Todo' },
    { href: '/pages/postuser', text: 'Users' },
  ];

  return (
    <div>
      <nav className='text-white flex justify-between bg-blue-800'>
        <div className='flex items-center'>
          <h1 className='mx-5 text-xl'>  My Website</h1>
        </div>
        <div className=''>
          {routes.map((route, index) => (
            <ButtonLink key={index} href={route.href} text={route.text} />
          ))}
        </div>

      </nav>
    </div>
  )
}

export default NevBar
