/*
 * action types
 */
export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const CHANGE_DEFAULT_VOLUME = 'CHANGE_DEFAULT_VOLUME';

/*
 * action creators
 */
export const fetchProductsPending = () => ({
  type: FETCH_PRODUCTS_PENDING
})

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  products: products
})

export const fetchProductsError = error => ({
  type: FETCH_PRODUCTS_ERROR,
  error: error
})

export const addQuantity = ({id, counter}) => ({
  type: ADD_QUANTITY,
  id: id,
  buttonType: counter
})

export const openModal = () => ({
  type: OPEN_MODAL
})

export const closeModal = () => ({
  type: CLOSE_MODAL
})

export const changeDefaultVolume = ({id, counter}) => ({
  type: CHANGE_DEFAULT_VOLUME,
  id: id,
  buttonType: counter
})

export const fetchProducts = () => {
  return dispatch => {
    dispatch(fetchProductsPending());
    fetch('/products')
    .then(res => res.json())
    .then(res => {
      dispatch(fetchProductsSuccess(res));
    })
    .catch(error => {
      dispatch(fetchProductsError(error));
    })
  }
}