import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import CartCSS from './Cart.module.css';
import { AppStateContext } from './AppState';

interface Props {}

interface State {
    isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            isOpen: false
        };

    }

    // React.MouseEvent<HTMLButtonElement, MouseEvent>
    handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(e.target);
        if((e.target as HTMLElement).nodeName === 'SPAN') {
            // (e.target as HTMLElement).
        }
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <AppStateContext.Consumer>
                {(state)=>(
                    <div className={CartCSS.cartContainer}>
                        <button
                            className={CartCSS.button}
                            type="button"
                            onClick={this.handleClick}>
                            <FiShoppingCart />
                            <span>{state.cart.items.length} pizza(s)</span>
                        </button>
                        <div
                            className={CartCSS.cartDropDown}
                            style={{ display: this.state.isOpen ? 'block' : 'none' }}>
                            <ul>
                                {
                                    state.cart.items.map((item)=>{
                                    return <li key={item.id}>{item.name} &times; {item.quantity}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                )}
            </AppStateContext.Consumer>
        );
    }
}

export default Cart;