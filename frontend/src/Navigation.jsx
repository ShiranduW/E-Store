import { ShoppingCart } from "lucide-react";

function Navigation() {

  const name = "Shirandu";
  const cartCount = 2;
  
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
        <p className="text-lg">{cartCount}</p>
        <div className="flex items-center gap-2">
          <ShoppingCart />
          Cart
        </div>
      </a>
    </div>
    <p>Hi, {name}</p>
  </div>
</nav>
  );
}

export default Navigation;
