import React from 'react';
import DisplayOrder from '../DisplayOrder/DisplayOrder';
import './Order.css';

const Order = (props) => {
    const {cart, setCart} =props;
    
    const chooseAgain=()=>{
        setCart([]);
    }
    return (
        <div>
            <h2 className='title'>Order Summary</h2>
                <p>Selected Items:{cart.length}</p>
                {
                   cart.map(order =><DisplayOrder
                    order={order}
    
                    ></DisplayOrder>) 
                }

                <button className='Choose-one'>Choose one</button>
                <button onClick={chooseAgain} className='choose-again'>Choose Again</button>
                
        </div>
    );
};

export default Order;