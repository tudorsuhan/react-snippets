// Core
import { connect } from "react-redux"

// Actions
import cartActions from "../../../actions/cart"

// Components
import ProductCard from "./ProductCard"

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  addProductToCart: cartActions.addProductToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)
