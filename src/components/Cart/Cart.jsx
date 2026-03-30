import React from 'react';

const Cart = ({ carts, setCarts }) => {

    const calculatePrice = carts.reduce((sum, item) => sum + item.price, 0);
    const totalPrice = calculatePrice.toFixed(3);

    const handleRemove = (item) => {
        // console.log("Clicked remove");
        // console.log(item);

        const filteredCart = carts.filter(removeClickedCard => removeClickedCard.id !== item.id);
        setCarts(filteredCart);
        
    }

    return (
        <div className='p-10'>
            <h1 className='text-2xl font-bold'>Your Cart</h1>

            {
                carts.length === 0 ? <h1 className='text-center font-bold p-10 text-2xl border shadow card mt-5 border-gray-200 opacity-80'>Your Cart Is Empty !</h1> : <>
                    {
                        carts.map(item => <div className='flex justify-between items-center bg-zinc-200 rounded-lg m-5 p-5' key={item.id}>
                            <div className='flex items-center gap-5'>
                                <div>
                                    <img className="h-10 w-10 object-contain" src={item.icon} alt="icon" />
                                </div>
                                <div>
                                    <h2 className='text-xl font-bold'>{item.name}</h2>
                                    <p className='font-semibold opacity-80'>${item.price} / {item.period}</p>
                                </div>
                            </div>
                            <button className="btn btn-outline btn-secondary border-none" onClick={() => handleRemove(item)}>Remove</button>
                        </div>)
                    }

                    <div className='p-5 space-y-5'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-xl font-bold'>Total:</h1>
                            <h3 className='text-2xl font-bold'>${totalPrice}</h3>
                        </div>
                        <button className='btn w-full rounded-full text-white bg-green-600' onClick={() => setCarts([])}>Proceed to Checkout</button>
                    </div>
                </>
            }

        </div>
    );
};

export default Cart;