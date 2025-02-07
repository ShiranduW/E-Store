import Navigation from "./Navigation.jsx"
import Hero from "./Hero.jsx"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Calendar } from "@/components/ui/calendar"


function App() {

  const name = "Shirandu";
  const cartCount = 2;

  return (
    <div> 
      <Navigation name={name} cartCount={cartCount}/>
      <Hero/>
      <Card className="w-[350px] mx-auto border border-black">
      <CardHeader>
        <CardTitle>Card Component</CardTitle>
        <CardDescription> Add Card component using shadcn/ui.</CardDescription>
      </CardHeader>
      <CardContent>
      <div className="flex px-4 mt-4  items-center justify-between">
        <h2 className="text-2xl  font-semibold"> Item 1 </h2>
        <span className="block text-lg font-medium">$100.00 </span>
      </div>
      <div className="px-4 mt-2">
        <p className="text-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos
        suscipit est autem quia? Voluptatem?</p>
      </div>
      <div className="mt-1 p-4">
      </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline"> Later </Button>
        <Button>Add to Cart</Button>
      </CardFooter>
    </Card>

    <Calendar
      mode="single"
      className="rounded-md border"
    />

    </div>
  );
}
export default App