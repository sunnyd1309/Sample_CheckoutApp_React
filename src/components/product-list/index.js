import React from "react";
import "./index.css";

const ProductList = (props) => {
  return (
    <div className="layout-row wrap justify-content-center flex-70 app-product-list">
      {props.products.map((product, i) => {
        const inCart = props.cart.items.find((x) => x.id === i + 1);
        return (
          <section
            className="w-30"
            data-testid={"product-item-" + i}
            key={product.id}
          >
            <div className="card ma-16">
              <img
                alt="Your Cart"
                src={product.image}
                className="d-inline-block align-top product-image"
              />
              <div className="card-text pa-4">
                <h5 className="ma-0 text-center">{product.name}</h5>
                <p className="ma-0 mt-8 text-center">${product.price}</p>
              </div>
              <div className="card-actions justify-content-center pa-4">
                {!inCart && (
                  <button
                    className="x-small outlined"
                    data-testid="btn-item-add"
                    onClick={() => props.addToCart(i)}
                  >
                    Add To Cart
                  </button>
                )}

                {inCart && (
                  <button
                    className="x-small danger"
                    data-testid="btn-item-remove"
                    onClick={() => props.removeFromCart(i)}
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ProductList;
