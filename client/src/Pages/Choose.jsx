import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Choose() {

    const { user } = useSelector(
        (state) => state.auth);
    // console.log("user", user);

    return (
        <div className="h-screen flex flex-col items-center">
            {/* <h1 className='text-gray-800 m-10 font-semibold text-xl text-primary'>
                Hi,{user.role === ('admin' || 'superadmin') ? (<span className='uppercase text-gray-500'>{user.role} </span>) : (<></>)} {user.name}
            </h1> */}


            <div className="flex justify-center items-center p-20">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 p-4">
                    <Link to="/workspace">
                        <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h2 className="text-2xl font-bold mb-2 text-gray-900">High Court</h2>
                            <p className="text-gray-700">Description of Criminal Case.</p>
                        </div>
                    </Link>
                    <Link to="/workspace">
                        <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h2 className="text-2xl font-bold mb-2 text-gray-900">Supreme Court</h2>
                            <p className="text-gray-700">Description of Divorce Case.</p>
                        </div>
                    </Link>
                    <Link to="/workspace">
                        <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                            <h2 className="text-2xl font-bold mb-2 text-gray-900">Other</h2>
                            <p className="text-gray-700">Description of Other Cases.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}