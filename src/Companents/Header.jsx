import React from 'react';
import img from '../Utils/Img/hamburger.svg'

const Header = () => {
  return (
    <header className='header p-1'>
      <div className="container">
        <div className="header__inner d-flex aling-items-center justify-content-between">
          <a className='header__logo fs-2 d-flex' href='/'>
            <span className=''>M </span><span className='A fs-1 '>A</span>
          </a>

          <ul className='navbar font-monospace m-0'>
            <li className='header__item nav-item'>
              <a href="#aboute" className='header__item-link'>
                Aboute
              </a>
            </li>

            <li className='header__item nav-item'>
              <a href="#projects" className='header__item-link'>
                Projects
              </a>
            </li>

            <li className='header__item nav-item'>
              <a href="#contacts" className='header__item-link'>
                Contacts
              </a>
            </li>
          </ul>

          <button className="header__hamburger btn p-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
            <img className='p-0 m-0' src={img} alt="hamburger" width={25} height={25} />
          </button>

          <div className="offcanvas offcanvas-end text-end bg-dark" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="p-3">
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div clasName="offcanvas-body">
              <ul class="text-center d-flex align-items-center justify-content-around m-0 p-0">
                <li class="header__item"> <a className='header__item-link' href="#aboute">Aboute</a></li>
                <li class="header__item"> <a className='header__item-link' href="#projects">Projects</a></li>
                <li class="header__item"><a className='header__item-link' href="#contacts">Contacts</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header