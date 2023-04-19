import { HeroBanner, Footer } from "@/components";

const Home = () => {
  return (
    <>
      <HeroBanner />

      <div className="products-heading">
        <h2>Best selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {['product 1', 'Product 2'].map(
          (product) => product
        )}
      </div>

      <Footer />
    </>
  )
}

export default Home;