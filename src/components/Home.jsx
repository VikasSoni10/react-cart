import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const Home = () => {

  const dispatch = useDispatch();

  const productList = [
    {
      name: "MacBook",
      imgSrc: "https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901_1280.jpg",
      price: 123310,
      id: "sadhasbcbbbvdshfiuedj",
    },
    {
      name: "Shoes",
      imgSrc: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      price: 690,
      id: "sadhajhbjfnbvdshfiuedj",
    }
  ];


  const addToCartHandler = (options)=>{
    dispatch({type: "addToCart", payload: options});
    dispatch({type:"calculatePrice"});
    toast.success("Added to Cart");
  }

  return (
    <div className="home">
     { productList.map((item)=>(
      <ProductCard
        key={item.id}
        name={item.name}
        imgSrc={item.imgSrc}
        price={item.price}
        id={item.id}
        handler={addToCartHandler}
      />
      ))}
    </div>
  );
};

const ProductCard = ({name, imgSrc, price, handler, id}) => (
  <div className="productcard">
    <img src={imgSrc} alt="item" />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={()=>handler({name, imgSrc, id, price, quantity: 1})}>Add to Cart</button>
  </div>
);

export default Home;
