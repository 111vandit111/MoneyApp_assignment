import { products } from "../data";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";

const Store = () => {
  return (
    <>
      <Heading>
        <h1>Browse the Store!</h1>
        <p>Check for our new Luxury Products </p>
      </Heading>
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </>
  );
};

const Heading = styled.div`
  margin-top: 8rem;
  text-align: center;
`;

const ProductsContainer = styled.div`
  max-width: 1024px;
  width: 80%;
  margin: 70px auto 0;
  gap: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
`;

export default Store;
