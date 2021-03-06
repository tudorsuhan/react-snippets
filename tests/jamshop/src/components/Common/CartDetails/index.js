// Core
import { connect } from "react-redux"

// Selectors
import cartSelectors from "../../../selectors/cart"

// Components
import CartDetails from "./CartDetails"

const mapStateToProps = (state, props) => ({
  products: cartSelectors.getProducts(state, props),
  count: cartSelectors.getCount(state),
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails)
