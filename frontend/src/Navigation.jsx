import { ShoppingCart } from "lucide-react";
import { Link } from "react-router";

function Navigation(props) {
  
  return (
    <nav className="flex items-center justify-between p-8 ml-16 mr-16">
  <div className="flex gap-16">
    <a className="font-semibold text-3xl" href="/">
      Mebius
    </a>
    <div className="flex items-center gap-4">
      <a href="/">Home</a>
      <a href="/shop">Shop</a>
    </div>
  </div>
  <div className="flex items-center gap-4">
    <div className="relative flex items-center gap-4">
      <a href="/cart" className="flex items-center gap-4 relative">
        <p className="text-lg">{props.cartCount}</p>
        <div className="flex items-center gap-2">
          <ShoppingCart />
          Cart
        </div>
        </a>
        </div>
        {!props.name && (
          <div className="flex items-center gap-4">
            <Link to="/sign-in" className=" text-primary ">
              Sign In
            </Link>
            <Link to="/sign-up" className=" text-primary ">
              Sign Up
            </Link>
          </div>
        )}
        {props.name && <p>Hi, {props.name}</p>}
      </div>
    </nav>
  );
}

export default Navigation;
