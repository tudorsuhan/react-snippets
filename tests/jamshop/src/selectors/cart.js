// Core
import { createSelector } from "reselect"

const getApp = state => state.app

const getCart = createSelector(getApp, app => app.cart)

const getProducts = createSelector(getCart, cart => cart.products)

const getCount = createSelector(getCart, cart => cart.count)

export default {
  getProducts,
  getCount,
}
