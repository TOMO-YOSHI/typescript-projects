import React from 'react';
import PizzaCSS from './Pizza.module.css';
import { useStateDispatch } from './AppState';
import { Pizza } from '../types';
import { AddToCartProps, withAddToCart } from './AddToCart';

// interface Pizza {
//     id: number;
//     name: string;
//     description: string;
//     price: number;
// }

interface Props extends AddToCartProps {
    pizza: Pizza
}

const PizzaItem: React.FC<Props> = ({ pizza, addToCart }) => {
    // const dispatch = useStateDispatch()
    const handleAddToCartClick = () => {
        addToCart({ id: pizza.id, name: pizza.name, price: pizza.price })
        // dispatch({
        //     type: 'ADD_TO_CART',
        //     payload: {
        //         item: {id: pizza.id, name: pizza.name, price: pizza.price}
        //     }
        // })
    }
    return (
        <li className={PizzaCSS.container}>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
            <button type='button' onClick={handleAddToCartClick}>Add to Cart</button>
        </li>
    );
};

export default withAddToCart(PizzaItem);