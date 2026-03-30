import React, { useState } from 'react';
import { TiTick } from 'react-icons/ti';

const Card = ({ card, carts, setCarts }) => {

    const [isBuyNow, setBuyNow] = useState(false);

    const handleBuy = () => {
        setBuyNow(true);
        setCarts([...carts, card]);
    }

    return (
        <div className='flex flex-col'>
            <div className="card flex-1 w-full bg-base-100 shadow-sm border border-base-200">
                <div className="card-body flex flex-col h-full">

                    <div className="flex justify-end">
                        <span className={`badge font-semibold text-xs p-3 rounded-full ${card.tag === 'Popular' ? 'bg-indigo-100 text-indigo-700' :
                            card.tag === 'New' ? 'bg-green-100 text-green-700 border-green-200' :
                                'bg-orange-100 text-orange-700'
                            }`}>
                            {card.tagType}
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
                            <span className="opacity-60"> / {card.period}</span>
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
                        <button onClick={handleBuy} className={`btn ${isBuyNow ? "bg-green-500 text-white" : "btn-primary"} w-full rounded-full`}>
                            {isBuyNow ? (
                                <span className="flex items-center justify-center gap-2">
                                    <TiTick className="text-xl" /> Added to Cart
                                </span>
                            ) : (
                                "Buy Now"
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;