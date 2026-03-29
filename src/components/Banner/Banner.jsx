import React from 'react';
import bannerImg from "../../assets/banner.png";
import { CiPlay1 } from 'react-icons/ci';

const Banner = () => {
    return (
        <section className="bg-white py-16 md:py-24 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 lg:gap-16 items-center">

                <div className="md:col-span-6 space-y-6">

                    <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-xs font-semibold text-purple-700">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-600 border border-purple-300 shadow-inner"></span>
                        <span>New: AI-Powered Tools Available</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-[1.15] tracking-tight">
                        Supercharge Your <br className="hidden lg:block" /> Digital Workflow
                    </h1>

                    <div className="space-y-4 text-gray-600 max-w-lg">
                        <p>
                            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
                        </p>
                        <p className="text-gray-900 font-medium">Explore Products</p>
                    </div>

                    <div className="flex items-center gap-4 pt-4">
                        <button className="rounded-full bg-[#8B2CFF] px-8 py-3 text-sm font-semibold text-white shadow hover:bg-[#7a23e8] transition">
                            Explore Products
                        </button>

                        <button className="rounded-full border border-purple-300 bg-white px-8 py-3 text-sm font-semibold text-purple-700 hover:border-purple-400 hover:bg-purple-50 transition flex gap-2 items-center">
                            <CiPlay1 />
                            Watch Demo
                        </button>
                    </div>
                </div>

                <div className="md:col-span-6 flex justify-center md:justify-end">
                    <div className="aspect-4/5 w-3/4 md:w-full max-w-lg rounded-xl bg-white p-4 shadow-xl shadow-blue-500/10">
                        <img
                            src={bannerImg}
                            alt="banner image"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Banner;