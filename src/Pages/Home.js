import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='text-center mt-5 p-5 bg-dark text-white shadow-lg w-25 mx-auto'>
            <h1 className='mb-5 mt-2'>
                hi, i am home page
            </h1>

            <Link className=' btn btn-warning  h4' to={"/login"}>
                Let's connect
            </Link>
        </div>
    )
}

export default Home
