import AddToCart from "./AddToCart";

const ProductCard = () => {
  return (
    <div className="product">
      <div className="product-top">
        <img src={""} className="image" />
        <div className="title">{}</div>
      </div>
      <div className="product-body">
        <span>{}</span>
        <AddToCart />
      </div>
    </div>
  );
};

export default ProductCard;
