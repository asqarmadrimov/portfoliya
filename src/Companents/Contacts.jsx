import React from 'react'

const Contacts = () => {
  return (
    <section className='contacts pb-5' id='contacts'>
      <div className="container-md">
        <h2 className='fs-1 font-monospace text-center py-3'>Contacts</h2>

        <div className='border border-success rounded-3 w-75 p-3 bg-black mx-auto font-monospace text-center'>
          <div className='w-75 bg-dark p-3 mx-auto fs-5 text-white-50'> My tel: +998 91 431-25-30
            <a href="tel:+998914312530" className='btn btn-secondary ms-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
            </a>
          </div>

          <div className='w-75 bg-dark p-3 mx-auto fs-5 my-3 text-white-50'> My email: madrimov2530@gmail.com</div>

          <div className='w-75 bg-dark p-3 mx-auto fs-5 text-white-50'> My Telegram: MadrimovAsqar
            <a href="https://t.me/madrimov2530" className='btn btn-secondary ms-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts