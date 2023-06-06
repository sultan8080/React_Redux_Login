import React from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
    return (
        <div className=' text-warning mt-5 p-5 bg-dark w-50 mx-auto shadow-lg'>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className='d-flex justify-content-between'>
                    <button type="submit" className="btn btn-warning w-50">Submit</button>
                    <Link className=' btn btn-secondary w-25' to={"/"}>
                        Let's go Home
                    </Link>
                </div>


            </form>
        </div>
    )
}
