import SignIn from "../pages/auth/signin/SignIn";
import CartShopping from "../pages/cart-shop/CartShopping";
import Homepage from "../pages/homepages/Homepage";
import StoreLocator from "../pages/locator-store/StoreLocator";
import TrackOrder from "../pages/order-tracking/TrackOrder";
import LoveProducts from "../pages/productLove/LoveProducts";
const publicRouter = [
  {
    path: "/",
    element:
      <Homepage />
  },
  {
    path: "/track-order",
    element:
      <TrackOrder />
  },
  {
    path: "/store-location",
    element:
      <StoreLocator />
  },
  {
    path: "/love-product",
    element:
      <LoveProducts />
  },
  {
    path: "/signin",
    element:
      <SignIn />

  },
  {
    path: "/cart-shopping",
    element:
      <CartShopping />
  },
];

export { publicRouter };