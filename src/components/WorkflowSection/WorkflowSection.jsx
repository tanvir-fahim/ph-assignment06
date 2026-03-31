import React from 'react';

const WorkflowSection = () => {
    return (
        <div className='py-10 bg-[#4F39F6] text-white'>
            <div className='text-center my-10'>
                <h2 className='text-4xl font-bold mb-5'>Ready to Transform Your Workflow?</h2>
                <p className='text-sm opacity-80 '>Join thousands of professionals who are already using Digitools to work smarter.</p>
                <p className='text-sm opacity-80 '>Start your free trial today.</p>
            </div>
            <div className='text-center my-10'>
                <div className='flex justify-center gap-5 '>
                    <button className='btn text-[#4F39F6] rounded-full w-40'>Explore Products</button>
                    <button className='btn btn-outline rounded-full w-40 hover:bg-yellow-400'>View Pricing</button>
                </div>
                <p className='text-sm opacity-80 mt-5'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default WorkflowSection;