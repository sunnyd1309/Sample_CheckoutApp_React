import "h8k-components";
import React, { useState } from "react";
import "./App.css";
import Cart from "./components/cart";
import ProductList from "./components/product-list";

const App = () => {
  const productsList = [...PRODUCTS].map((product, index) => {
    product.id = index + 1;
    product.image = `/images/items/${product.name.toLocaleLowerCase()}.png`;
    product.cartQuantity = 0;
    return product;
  });

  const [cart, setCart] = useState({
    items: [],
    subTotal: 0,
    totalPrice: 0,
    discount: 0,
    selectedCoupon: "0",
  });
  const [products, setProducts] = useState(productsList);

  const addToCart = (index) => {
    let productArr = [...products];
    productArr[index].cartQuantity = 1;
    let cartItem = { ...cart };
    cartItem.items.push({
      id: productArr[index].id,
      price: productArr[index].price,
      item: productArr[index].heading,
      quantity: 1,
    });
    setProducts(productArr);
    setCart(cartItem);
    updateTotalPrice();
  };

  const removeFromCart = (index) => {
    const productsArr = [...products];
    productsArr[index].cartQuantity = 0;
    let cartList = { ...cart };
    let cartIndex = cart.items.findIndex(
      (item) => item.id === productsArr[index].id
    );
    cartList.items.splice(cartIndex, 1);
    setCart(cartList);
    setProducts(productsArr);
    updateTotalPrice();
  };

  const updateTotalPrice = async(data=null) => {
    let totalPrice = 0;
    let cartList = (data && {...data}) || { ...cart };

    cartList.items.forEach((item) => {
      totalPrice = totalPrice + item.price;
    });

    cartList.subTotal = totalPrice;
    cartList.discount = (parseInt(cartList.selectedCoupon, 10) / 100) * totalPrice;
    cartList.totalPrice = cartList.subTotal - cartList.discount;
    setCart(cartList);
  };

  const handleChange = async(e) => {
    let cartList = { ...cart };
    cartList.selectedCoupon = e.target.value;
    setCart(cartList);
    updateTotalPrice(cartList)
  };

  return (
    <div>
      <div className="layout-row shop-component">
        <ProductList
          cart={cart}
          products={products}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
        <Cart cart={cart} handleChange={(e)=>{handleChange(e)}}/>
      </div>
    </div>
  );
};

export const PRODUCTS = [
  {
    heading: "Cap - $10",
    name: "Cap",
    price: 10,
  },
  {
    heading: "Hand Bag - $30",
    name: "HandBag",
    price: 30,
  },
  {
    heading: "Shirt - $30",
    name: "Shirt",
    price: 30,
  },
  {
    heading: "Shoes - $50",
    name: "Shoe",
    price: 50,
  },
  {
    heading: "Pant - $40",
    name: "Pant",
    price: 40,
  },
  {
    heading: "Slipper - $20",
    name: "Slipper",
    price: 20,
  },
];
export default App;
