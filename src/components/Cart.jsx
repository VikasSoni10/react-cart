import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartItems, subTotal, shipping, tax, total } = useSelector((state) => state.cart);
  const dispatch= useDispatch();

  const increament  = (id)=>{
    dispatch({type:"addToCart", payload:{id}});
    dispatch({type:"calculatePrice"})
  }

  const decreament = (id)=>{
    dispatch({type:"decreament", payload:id})
    dispatch({type:"calculatePrice"})

  }

  const deleteHandler = (id)=>{
    dispatch({type:"deleteFromCart", payload:id})
    dispatch({type:"calculatePrice"})

  }


  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              key={i.id}
              name={i.name}
              id={i.id}
              imgSrc={i.imgSrc}
              price={i.price}
              qty={i.quantity}
              decreament={decreament}
              increament={increament}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1>No Items Yet</h1>
        )}
      </main>
      <aside>
        <h2>Subtotal: ${subTotal}</h2>
        <h2>Shipping: ${shipping}</h2>
        <h2>Tax: ${tax}</h2>
        <h2>Total: ${total}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  name,
  imgSrc,
  price,
  qty,
  increament,
  decreament,
  deleteHandler,
  id,
}) => (
  <div className="cartitem">
    <img src={imgSrc} alt="product" />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>
    <div>
      <button onClick={() => decreament(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increament(id)}>+</button>
    </div>
    <AiFillDelete onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;
