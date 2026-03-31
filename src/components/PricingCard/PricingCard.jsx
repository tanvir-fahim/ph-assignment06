import React from 'react';

const PricingCard = () => {
    return (
        <div>
            <div className='text-center space-y-5 my-10'>
                <h2 className='text-4xl font-bold'>Simple, Transparent Pricing</h2>
                <p className='text-sm opacity-80 font-semibold'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'>

                <div className="card bg-base-100 shadow-sm flex flex-col rounded-[20px]">
                    <div className="card-body bg-[#F9FAFC] rounded-[20px]">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold">Starter</h2>
                            <p className='mb-2 opacity-60'>Perfect for getting started</p>
                            <p className="text-2xl font-bold ">$0<span className='text-sm opacity-60 font-medium'>/Month</span></p>
                        </div>
                        <ul className="mt-6 flex flex-col gap-1 text-xs flex-1">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='opacity-60'>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='opacity-60'>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='opacity-60'>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='opacity-60'>1 project per month</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary w-full rounded-full">Get Started Free</button>
                        </div>
                    </div>
                </div>


                <div className="card bg-base-100 shadow-sm flex flex-col rounded-[20px]">
                    <div className="card-body bg-[#4F39F6] text-white rounded-[20px]">
                        <span className="badge badge-xs badge-warning">Most Popular</span>
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold">Pro</h2>
                            <p className='mb-2 opacity-70'>Best for professionals</p>
                            <p className="text-2xl font-bold ">$29<span className='text-sm font-medium'>/Month</span></p>
                        </div>
                        <ul className="mt-6 flex flex-col gap-1 text-xs flex-1">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to all premium tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Priority support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Unlimited projects</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Cloud sync</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Advanced analytics</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn w-full rounded-full text-[#4F39F6]">Start Pro Trial</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-sm flex flex-col rounded-[20px]">
                    <div className="card-body bg-[#F9FAFC] rounded-[20px]">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold">Enterprise</h2>
                            <p className='mb-2 opacity-60'>For teams and businesses</p>
                            <p className="text-2xl font-bold ">$99<span className='text-sm opacity-60 font-medium'>/Month</span></p>
                        </div>
                        <ul className="mt-6 flex flex-col gap-1 text-xs flex-1">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='opacity-60'>Everything in Pro</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='opacity-60'>Team collaboration</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='opacity-60'>Custom integrations</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='opacity-60'>Dedicated support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='opacity-60'>SLA guarantee</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span className='opacity-60'>Custom branding</span>
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="btn btn-primary w-full rounded-full">Contact Sales</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default PricingCard;