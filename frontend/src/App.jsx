import Navigation from "./Navigation.jsx"
import Hero from "./Hero.jsx"
import Products from "./Products.jsx"


function App() {
  const name = "Shiru";
  const cartCount = 4;

  return (
    <div>
      <Navigation name={name} cartCount={cartCount} />
      <Hero />
      <Products/>
      </div>
  );
}

export default App;
