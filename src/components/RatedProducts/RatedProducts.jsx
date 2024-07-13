import axios from "axios";
import { useEffect, useState } from "react";
import '../RatedProducts/RatedProducts.css'

function RatedProducts() {
    const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://backend-e-commerce-production.up.railway.app/api/v1/products');
        const sortedProducts = response.data.sort((a, b) => b.rating - a.rating);
        setProducts(sortedProducts.slice(0, 3));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
      <div>
      <h1 className="rated_header">MOST TOP RATED PRODUCTS</h1>
        <div className="rated_card">

        {products.map((product) => (
          <div className="rated_cotainer" key={product.id}>
              <div className="rated">
            <img className="rated_container_img" src={product.image} alt="" />
            <div>
            <h2 className="rated_container_title">{product.name}</h2>
            <p className="rated_container_rate">Rating: {product.rating}</p>
            <div className="rated_prices">
              <p className="rated_container_price">${product.price}</p>
              <p className="rated_container_oldprice">$30</p>
            </div>
            </div>
          </div>
        </div>
        ))}
        </div>
    </div>
  )
}

export default RatedProducts