import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderIcon = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState();
    const contextCtx = useContext(CartContext);
    const { items } = contextCtx;
    const numberOfItems = contextCtx.items.reduce((currNumber, item) => {
        return currNumber + item.amount;
    }, 0);


    //For providing bump animation everytime an item is added to the Cart
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]); //since we cannot proovide [contextCtx] as a dependency here so we destructured items from contextCtx in line 9

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span className={classes.text}>Your Cart</span>
            <span className={classes.badge}>
                {numberOfItems}
            </span>
        </button>

    );
};

export default HeaderIcon;