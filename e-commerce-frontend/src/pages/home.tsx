import { Link } from "react-router"
import ProductCard from "../components/product-card"
import mac from "../assets/macBook.png"

const Home = () => {
  const addToCartHandler = () => {

  }
  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to="/search" className="findmore">More</Link>
      </h1>
      <main>
        <ProductCard productId="asd" price={4545}
        stock={435} name="Macbook" handler={addToCartHandler} photo={mac} />
      </main>
    </div>
  )
}

export default Home