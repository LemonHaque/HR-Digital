
import pic from "../../../../public/assets/error.jpg"
import {Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='flex items-center h-screen text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-4'>
       
        <div className='max-w-md text-center'>
          <h2 className='mb-4 font-bold text-7xl'>
            <img src={pic} alt="" />
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