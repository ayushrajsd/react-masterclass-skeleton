const ProductList = () => {
  const ShimmerCard = () => (
    <div className="loading-card">
      <div className="image loading-shimmer"></div>
      <div
        className="title loading-shimmer"
        style={{ marginTop: "1rem", height: "1rem" }}
      ></div>
      <div
        className="title loading-shimmer"
        style={{ marginTop: "0.5rem", height: "1rem", width: "80%" }}
      ></div>
      {/* Add more shimmering lines or shapes as needed */}
    </div>
  );
  return <div className="products">{}</div>;
};
