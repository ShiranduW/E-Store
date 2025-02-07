function Hero() {
    return(
<section className="py-8 ml-16 mr-16">
      <div className="grid grid-cols-2 rounded-md min-h-[60vh] bg-[#f4f8f9]">
        <div className="flex flex-col justify-center p-16 gap-4">
        <span className="inline-block rounded-full px-2 py-1 text-xs bg-[#febc26] w-[138px]">WEEKLY DISCOUNT</span>
          <h1 className="text-[3.75rem] font-semibold leading-none">Premium Product Online Shop</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos
            suscipit est autem quia? Voluptatem?
          </p>
          <a to="/shop" className="inline-block px-4 py-2 text-white font-medium bg-black rounded-md w-[110px]">
            Shop Now
          </a>
        </div>
        <div className="relative">
          <img
            src="https://fee-storefront.vercel.app/assets/hero/hero.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
