import Dashboard from "../layouts/AdminLayout/pages/Dashboard/Dashboard";
import Staff from "../layouts/AdminLayout/pages/Staff/Staff";
import CartShopping from "../pages/CartShopping/CartShopping";
import Homepage from "../pages/homepages/Homepage";
import LoveProducts from "../pages/LoveProducts/LoveProducts";
import SignIn from "../pages/SignIn/SignIn";
import StoreLocator from "../pages/StoreLocator/StoreLocator";
import TrackOrder from "../pages/TrackOrder/TrackOrder";

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

const adminlayout = [
  {
    index: true, 
    element: <Dashboard />
  },
  {
    path: "staff", 
    element: <Staff />
  },
  {

  }
]

const privateRouter = [

]

export { publicRouter, adminlayout, privateRouter };