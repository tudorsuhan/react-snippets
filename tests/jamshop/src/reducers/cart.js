// Core
import { handleActions } from "redux-actions"

// Actions
import productsActions from "../actions/cart"

const initialState = {
  products: [],
  count: 0,
}

export const handleAddProductToCart = (
  state,
  { payload: { slug, name, price } },
) => ({
  ...state,
  products: [
    ...state.products,
    {
      slug,
      name,
      price,
    },
  ],
  count: state.count + 1,
})

export default handleActions(
  {
    [productsActions.addProductToCart]: handleAddProductToCart,
  },
  initialState,
)
