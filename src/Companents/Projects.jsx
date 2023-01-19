import React from 'react';
import img1 from '../Utils/Img/750be846-f90d-4738-a3d6-05e73599d4c3.png';
import img2 from '../Utils/Img/92dbb945-dc52-4b1a-b133-da7ea1ae70f1.png';
import img3 from '../Utils/Img/freeMael.png';
import img4 from '../Utils/Img/pizza.png';
import img5 from '../Utils/Img/movies.png';
import img6 from '../Utils/Img/payapi.png';

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <div className="container">
        <h2 className='fs-1 text-center font-monospace'>Projects</h2>

        <ul className='m-0 p-0 pt-3 pb-3 d-flex flex-wrap gap-3 justify-content-center'>
          <li class="card p-1 bg-dark border-success" style={{ width: '21rem' }}>
            <a className='text-white' target={'blank'} href="https://youtube-clone-ten-tau.vercel.app/" >
              <img className='card-img-top' src={img1} alt="img" />
              <div class="card-body">
                  <span className='opacity-50'>Title:</span> Youtube Clone <br />
                  <span className='opacity-50'>construction:</span> ReactJS <br />
                  <span className='opacity-50'>Deta:</span> 10.01.2023 year <br />
              </div>
            </a>
          </li>

          <li class="card p-1 bg-dark border-success" style={{ width: '21rem' }}>
            <a className='text-white' target={'blank'} href="https://evos-beige.vercel.app/" >
              <img className='card-img-top' src={img2} alt="img" />
              <div class="card-body">
                  <span className='opacity-50'>Title:</span> Evos <br />
                  <span className='opacity-50'>construction:</span> ReactJS <br />
                  <span className='opacity-50'>Deta:</span> 22.12.2022 year <br />
              </div>
            </a>
          </li>

          <li class="card p-1 bg-dark border-success" style={{ width: '21rem' }}>
            <a className='text-white' target={'blank'} href="https://food-wine-psi.vercel.app/" >
              <img className='card-img-top' src={img3} alt="img" />
              <div class="card-body">
                  <span className='opacity-50'>Title:</span> Free Mael <br />
                  <span className='opacity-50'>construction:</span> ReactJS <br />
                  <span className='opacity-50'>Deta:</span> 18.11.2022 <br />
              </div>
            </a>
          </li>

          <li class="card p-1 bg-dark border-success" style={{ width: '21rem' }}>
            <a className='text-white' target={'blank'} href="https://pizza-mu-seven.vercel.app/" >
              <img className='card-img-top' src={img4} alt="img" />
              <div class="card-body">
                  <span className='opacity-50'>Title:</span> Pizza Zakaz <br />
                  <span className='opacity-50'>construction:</span> JavaScript <br />
                  <span className='opacity-50'>Deta:</span> 9.11.2022 <br />
              </div>
            </a>
          </li>

          <li class="card p-1 bg-dark border-success" style={{ width: '21rem' }}>
            <a className='text-white' target={'blank'} href="https://movie-seven-theta.vercel.app/" >
              <img className='card-img-top' src={img5} alt="img" />
              <div class="card-body">
                  <span className='opacity-50'>Title:</span> Movies <br />
                  <span className='opacity-50'>construction:</span> JavaScript <br />
                  <span className='opacity-50'>Deta:</span> 9.11.2022 <br />
              </div>
            </a>
          </li>

          <li class="card p-1 bg-dark border-success" style={{ width: '21rem' }}>
            <a className='text-white' target={'blank'} href="https://payapi-f6ci.vercel.app/" >
              <img className='card-img-top' src={img6} alt="img" />
              <div class="card-body">
                  <span className='opacity-50'>Title:</span> Payapi <br />
                  <span className='opacity-50'>construction:</span> HTML, CSS, SCSS <br />
                  <span className='opacity-50'>Deta:</span> 8.10.2022 <br />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Projects