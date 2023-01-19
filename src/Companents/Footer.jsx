import React from 'react'

const Footer = () => {
  return (
    <footer className='pb-4'>
      <div className="container">
        <a className='header__logo fs-2 d-flex' href='/'>
          <span className=''>M </span><span className='A fs-1 '>A</span>
        </a>

        <div className="footer__content d-flex align-items-center justify-content-between flex-wrap">
          <ul className='d-flex align-content-center font-monospace m-0 p-0'>
            <li className='nav-item list-unstyled'>
              <a href="#aboute" className='header__item-link'>
                Aboute
              </a>
            </li>

            <li className='nav-item mx-2 mx-4 list-unstyled'>
              <a href="#projects" className='header__item-link'>
                Projects
              </a>
            </li>

            <li className='nav-item list-unstyled'>
              <a href="#contacts" className='header__item-link'>
                Contacts
              </a>
            </li>
          </ul>

          <a href='https://t.me/madrimov2530' className='fs-4 p-0 m-0 font-monospace text-white-50'><span className='fs-5'>©</span> Madrimov Asqar</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer