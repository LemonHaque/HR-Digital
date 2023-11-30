

import {Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
       
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-bold text-8xl'>
            <span className='sr-only'>Error</span>
            {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-4xl text-red-700 mb-8'>
            {error?.message}
          </p>
          <Link to='/' className='btn btn-primary  shadow-xs shadow-blue-500 hover:bg-blue-800 text-white font-semibold'>
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage