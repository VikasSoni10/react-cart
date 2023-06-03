import React from "react";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  return (
    <div className="cart">
      <main>
        <CartItem
          name={"MacBook"}
          id={"hbhb"}
          imgSrc={
            "https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg"}
            price={122330}
            qty={1}
        />
      </main>
      <aside>
        <h2>Subtotal: ${2000}</h2>
        <h2>Shipping: ${200}</h2>
        <h2>Tax: ${20}</h2>
        <h2>Total: ${1230}</h2>
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
      {qty}
      <button onClick={() => increament(id)}>+</button>
    </div>
    <AiFillDelete onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;
