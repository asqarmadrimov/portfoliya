import React from 'react';
import img from '../Utils/Img/avatar.svg'

const Home = () => {
  return (
    <section className='home pt-3'>
      <div className="container">
        <div className="home__inner">
          <div className="home__cantent font-monospace">
            <h1 className='fs-1 fw-ligh m-0 p-0'>
              <span className='fs-1'>Hi, I'm </span>
               Asqar
            </h1>

            <p className='home__text fs-5'>FrontEnd Developer</p>

            <a href='#projects' className='btn btn-secondary'> VIEW MY PRJECTS </a>
          </div>

          <img className='home__img' src={img} alt="avatar" />
        </div>
      </div>
    </section>
  )
}

export default Home