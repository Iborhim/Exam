import { useEffect, useState } from 'react';
import axios from 'axios';
import '../Products/Products.css'

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://backend-e-commerce-production.up.railway.app/api/v1/products');
        const fetchedProducts = response.data.map(product => ({
          image: product.image,
          name: product.name,
          rating: product.rating,
          price: product.price
        }));
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className='title'>ALL PRODUCTS</h1>
      <div className='card_container'>
        {products.map((product, id) => (
          <div key={id}>
            <div className='card_container_cards'>
            <img src={product.image} alt={product.title} />
            <h2>{product.name}</h2>
            <p className='rating'>Rating: {product.rating}</p>
            <div className='cards_price'>
              <p className='price'>${product.price}</p>
              <p className='oldprice'>$39</p>
              <p className='discount'>20% off</p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;