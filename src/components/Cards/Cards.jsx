import React, { use } from 'react';
import Card from './Card';

const Cards = ({ cardPromise }) => {

    const cards = use(cardPromise);
    // console.log(cards);

    return (
        <div className='w-11/12 mx-auto py-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {cards.map(card => (
                    <Card key={card.id} card = {card}/>
                ))}
            </div>
        </div>
    );
};

export default Cards;