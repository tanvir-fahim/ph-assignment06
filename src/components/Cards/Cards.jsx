import React, { use } from 'react';

const Cards = ({ cardPromise }) => {

    const cards = use(cardPromise);
    // console.log(cards);

    return (
        <div className='w-11/12 mx-auto py-10'>
            <div className='text-center mb-10'>
                <h2 className='text-4xl font-bold mb-3'>Premium Digital Tools</h2>
                <p className='opacity-80 max-w-2xl mx-auto'>
                    Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {cards.map((card, index) => (
                    <div key={index} className='flex flex-col'>
                        <div className="card flex-1 w-full bg-base-100 shadow-sm border border-base-200">
                            <div className="card-body flex flex-col h-full">

                                <div className="flex justify-end">
                                    <span className={`badge font-semibold text-xs p-3 rounded-full ${card.tag === 'Popular' ? 'bg-indigo-100 text-indigo-700' :
                                            card.tag === 'New' ? 'bg-green-100 text-green-700 border-green-200' :
                                                'bg-orange-100 text-orange-700'
                                        }`}>
                                        {card.tag}
                                    </span>
                                </div>

                                <div className="py-4">
                                    <img src={card.icon} alt={card.name} className="h-12 w-12" />
                                </div>

                                <div className='space-y-2'>
                                    <h3 className='text-xl font-bold'>{card.name}</h3>
                                    <p className='opacity-80 text-sm'>{card.description}</p>
                                    <p className="pt-2">
                                        <span className='text-2xl font-bold'>${card.price}</span>
                                        <span className="opacity-60">/month</span>
                                    </p>
                                </div>

                                <ul className="mt-6 space-y-3 grow">
                                    {card.features.map((feature, ind) => (
                                        <li key={ind} className="flex items-start">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5 me-2 text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className='text-sm font-medium opacity-80'>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8">
                                    <button className="btn btn-primary w-full rounded-full">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;