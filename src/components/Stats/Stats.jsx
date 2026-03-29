import React from 'react';

const Stats = () => {
    return (
        <section className="w-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 py-14 px-6">
            <div className="max-w-6xl mx-auto flex items-center justify-between text-white">

                <div className="flex-1 text-center">
                    <h2 className="text-5xl font-bold mb-2">50K+</h2>
                    <p className="text-xl font-medium opacity-80">Active Users</p>
                </div>

                <div className="h-14 w-0.5 bg-white opacity-20" />

                <div className="flex-1 text-center">
                    <h2 className="text-5xl font-bold mb-2">200+</h2>
                    <p className="text-xl font-medium opacity-80">Premium Tools</p>
                </div>

                <div className="h-14 w-0.5 bg-white opacity-20" />

                <div className="flex-1 text-center">
                    <h2 className="text-5xl font-bold mb-2">4.9</h2>
                    <p className="text-xl font-medium opacity-80">Rating</p>
                </div>

            </div>
        </section>
    );
};

export default Stats;