// Core
import { createAction } from "redux-actions"

const addProductToCart = createAction(
  "ADD_PRODUCT_TO_CART",
  ({ slug, name, price }) => ({ slug, name, price }),
)

export default {
  addProductToCart,
}
