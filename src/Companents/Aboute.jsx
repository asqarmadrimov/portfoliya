import React from 'react';

const Aboute = () => {
  return (
    <section className='aboute pt-3' id='aboute'>
      <div className="container">
        <h2 className='fs-1 text-center font-monospace'>Aboute</h2>
        <div className="aboute__text-content border border-success p-2">
          <p className='font-monospace fs-4 text-break text-center opacity-50 text-break mb-0'>
            Hello, my full name is Askar Madrimov, I am nineteen years old and I live in Khiva, Khorezm region. I am very interested in programming and working on myself. So far I have worked with frameworks like HTML, CSS, SCSS, BEM, Bootstrap, JavaScript and ReactJS. It's been six months since I started programming.
            <span className='fs-3 text-center my-1 font-monospace d-block'>My Skills</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </p>
        </div>


        <ul className='mt-3 p-0 d-flex flex-wrap gap-3 justify-content-center'>
          <li className="card border-success mb-3" style={{ width: '18rem' }}>
            <div className="card-header bg-black border-success fs-3">HTML</div>
            <div className="card-body bg-dark text-success text-center">
              <h5 className="card-title m-0 text-white">80 <span className='card-title2'>%</span></h5>
            </div>
          </li>

          <li className="card border-success mb-3" style={{ width: '18rem' }}>
            <div className="card-header bg-black border-success fs-3">CSS</div>
            <div className="card-body bg-dark text-success text-center">
              <h5 className="card-title m-0 text-white">80 <span className='card-title2'>%</span></h5>
            </div>
          </li>

          <li className="card border-success mb-3" style={{ width: '18rem' }}>
            <div className="card-header bg-black border-success fs-3">Bootstrap</div>
            <div className="card-body bg-dark text-success text-center">
              <h5 className="card-title m-0 text-white">70 <span className='card-title2'>%</span></h5>
            </div>
          </li>

          <li className="card border-success mb-3" style={{ width: '18rem' }}>
            <div className="card-header bg-black border-success fs-3">JavaScript</div>
            <div className="card-body bg-dark text-success text-center">
              <h5 className="card-title m-0 text-white">60 <span className='card-title2'>%</span></h5>
            </div>
          </li>

          <li className="card border-success mb-3" style={{ width: '18rem' }}>
            <div className="card-header bg-black border-success fs-3">ReactJS</div>
            <div className="card-body bg-dark text-success text-center">
              <h5 className="card-title m-0 text-white">50 <span className='card-title2'>%</span></h5>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Aboute