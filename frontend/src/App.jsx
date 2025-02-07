import Navigation from "./Navigation.jsx"
import Hero from "./Hero.jsx"


function App() {

  const name = "Shirandu";
  const cartCount = 2;

  return (
    <div> 
      <Navigation name={name} cartCount={cartCount}/>
      <Hero/>
    </div>
  );
}
export default App