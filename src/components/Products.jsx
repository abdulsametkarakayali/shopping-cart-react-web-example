import ProductItem from "./ProductItem"
import productData from "../ProductData"

const Products = (props) => {
  return (
    <div className="grid grid-cols-4 gap-10 mb-8">
      {productData.map((product)=>
      <ProductItem key={product.id} product={product} setCart={props.setCart} />)
      }
    </div>
  )
}

export default Products