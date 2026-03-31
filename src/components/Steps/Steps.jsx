import React from 'react';

const Steps = () => {
    return (
        <div className='bg-[#F9FAFC] py-10'>
            <div className='text-center space-y-5 my-10'>
                <h2 className='text-4xl font-bold'>Get Started In 3 Steps</h2>
                <p className='text-sm opacity-80 font-semibold'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            {/* Step card container */}

            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>
                <div className="card bg-base-100  shadow-sm">
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <button className="btn btn-circle bg-[#4F39F6] btn-sm text-white ">
                                01
                            </button>
                        </div>
                        <div className='bg-indigo-100 mx-auto h-20 w-20 p-5 rounded-full'>
                            <img src="/src/assets/user.png" alt="" />
                        </div>
                        <div className='text-center space-y-3 mb-10'>
                            <h2 className='text-2xl font-bold'>Create Account</h2>
                            <p className='text-sm opacity-80 '>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100  shadow-sm">
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <button className="btn btn-circle bg-[#4F39F6] btn-sm text-white ">
                                02
                            </button>
                        </div>
                        <div className='bg-indigo-100 mx-auto h-20 w-20 p-5 rounded-full'>
                            <img src="/src/assets/package.png" alt="" />
                        </div>
                        <div className='text-center space-y-3 mb-10'>
                            <h2 className='text-2xl font-bold'>Choose Products</h2>
                            <p className='text-sm opacity-80 '>Browse our catalog and select the toolsthat fit your needs.</p>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100  shadow-sm">
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <button className="btn btn-circle bg-[#4F39F6] btn-sm text-white ">
                                03
                            </button>
                        </div>
                        <div className='bg-indigo-100 mx-auto h-20 w-20 p-5 rounded-full'>
                            <img src="/src/assets/rocket.png" alt="" />
                        </div>
                        <div className='text-center space-y-3 mb-10'>
                            <h2 className='text-2xl font-bold'>Start Creating</h2>
                            <p className='text-sm opacity-80 '>Download and start using your premium tools immediately.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Steps;