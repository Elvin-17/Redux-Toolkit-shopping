import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/Slices/cart-slice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, total, price,id } = props.item;

  const dispatch = useDispatch();

  const addItemCartHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price
    }));
  }

  const removeItemCartHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemCartHandler}>-</button>
          <button onClick={addItemCartHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
