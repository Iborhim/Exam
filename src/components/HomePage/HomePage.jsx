import Advertisement from "../Advertisement/Advertisement"
import Contact from "../Contact/Contact"
import Hero from "../Hero/Hero"
import Products from "../Products/Products"
import RatedProducts from "../RatedProducts/RatedProducts"

function HomePage() {
  return (
    <>
      <Hero/>
      <Products/>
      <Advertisement/>
      <Contact/>
      <RatedProducts/>
    </>
  )
}

export default HomePage