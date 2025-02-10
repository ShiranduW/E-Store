import {Button} from "@/components/ui/button";

function Hero() {
    return(
<section className="py-8 ml-16 mr-16">
      <div className="grid grid-cols-2 rounded-md min-h-[60vh] bg-[#f4f8f9]">
        <div className="flex flex-col justify-center p-16 gap-4">
        <span className="inline-block rounded-full px-2 py-1 text-xs bg-[#febc26] w-[136px]">WEEKLY DISCOUNT</span>
          <h1 className="text-[3.75rem] font-semibold leading-none">Premium Product Online Shop</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos
            suscipit est autem quia? Voluptatem?
          </p>
          <Button className = "w-fit" asChild > 
            <a to="/shop">
            Shop Now</a> 
            </Button>
          
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