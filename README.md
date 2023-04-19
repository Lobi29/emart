      <div className='products-container'>
        {/* {["product1", "Product2"].map((product) => product)} */}
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>