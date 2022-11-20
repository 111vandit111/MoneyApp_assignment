import CartItem from "../components/CartItem";
import { useContext } from "react";
import CartContext from "../Context/CartContext";
import styled from "styled-components";
import Checkout from "../components/Checkout";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, checkout, clearCart } = useContext(CartContext);

  return (
    <>
      <Heading>
        <h1>
          Your Cart Has
          <span> {cartItems.length} </span>
          items.
        </h1>
      </Heading>

      {checkout && (
        <CheckoutMsg>
          <h4>Thank you for your purchase!</h4>
          <p>
            Your order has been placed and soon will be dispatched from our store , 🫂🤗!
          </p>
          <Link to="/">
            <ShopBtn onClick={clearCart}>Continue Shopping</ShopBtn>
          </Link>
        </CheckoutMsg>
      )}

      <Layout>
        <div>
          {
            <CartItemWrapper>
              {cartItems.length == 0 ? (
                <h4 style={{}}>Cart is empty</h4>
              ) : (
                <ul>
                  {cartItems.map((product) => (
                    <CartItem key={product.id} product={product} />
                  ))}
                </ul>
              )}
            </CartItemWrapper>
          }
        </div>

        <div>
          {cartItems.length > 0 && <Checkout />}
        </div>
      </Layout>
    </>
  );
};

const Heading = styled.div`
  margin-top: 8rem;
  text-align: center;
  font-family: 'Nunito', sans-serif;
  font-family: 'Open Sans', sans-serif;
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin: auto;
  width: 85%;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;

    &:nth-child(2) {
      margin-top: 3rem;
    }
  }
`;

const CartItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;

const CheckoutMsg = styled.div`
  color: green;
  text-align: center;
  padding: 1.5rem;

  p {
    margin: 0.5rem 0 1.5rem 0;
  }
`;

const ShopBtn = styled.button`
  outline: none;
  border: 1px solid green;
  background-color: transparent;
  padding: 0.75rem;
  color: green;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    background-color: green;
    color: white;
  }
`;
export default Cart;
