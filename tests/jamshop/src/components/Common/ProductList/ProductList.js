import React from "react"
import Carousel from "../Carousel"
import ProductCard from "../ProductCard"
import SectionHeader from "../SectionHeader"

const ProductList = props => {
  const { products, totalCount, productListTitle: { lead, title } } = props
  return (
    <div style={styles.productList}>
      <SectionHeader sectionTitle={title} sectionDescription={lead} />
      <Carousel products={products} visibleCount={4} totalCount={totalCount}>
        {products.map(item => (
          <ProductCard key={item.slug} item={item} />
        ))}
      </Carousel>
    </div>
  )
}
export default ProductList

const styles = {
  productList: {
    width: "100%",
    marginTop: 200,
    marginBottom: 135,
  },
}
