
const AddToCart = ({ product }) => {

  const productInCart = false;

  const handleAdd = () => {
  };
  const handleRemove = () => {
  };
  if (!productInCart) {
    return (
      <div>
        <button className="add-to-cart" onClick={handleAdd}>
          Add to Cart
        </button>
      </div>
    );
  } else {
    return (
      <div className="add-to-cart-container">
        <div onClick={handleRemove} className="add">
          -
        </div>
        {productInCart.quantity}
        <div className="add" onClick={handleAdd}>
          +
        </div>
        ;
      </div>
    );
  }
};

export default AddToCart;
