import { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const API_URL = "https://api.shilpimultiplex.com/api/Cart/AddToCart/";
const MealItem = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;
    
    const [id, setid] = useState("");
    const [uniqueUser, setuniqueUser] = useState("");
    const [productId, setproductId] = useState("");
    const [qty, setqty] = useState("");

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
        setuniqueUser(props.Uid);
        setproductId(props.id);
        setqty(amount);
    let item = {
        uniqueUser : 'User',
        productId : props.id,
        qty : amount,
      };
      console.log("iterm", uniqueUser, productId, qty);
        axios.post(API_URL + props.Uid, item).then((result) => {
            console.log(result.data);
          });

    };

    return (
        <li className = {classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler}/>
            </div>
            </li>
    );
};

export default MealItem;