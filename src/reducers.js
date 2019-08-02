import {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  ADD_QUANTITY,
  OPEN_MODAL,
  CLOSE_MODAL,
  CHANGE_DEFAULT_VOLUME
} from './actions';

const initialState = {
  pending: false,
  products: [],
  error: null,
  showModal: false
}

const orderGuide = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PRODUCTS_PENDING: 
      return {
        ...state,
        pending: true
      }
    case FETCH_PRODUCTS_SUCCESS:
      action.products.map(x => x.defaultVolume = x.minQuantity)
      return {
        ...state,
        pending: false,
        products: action.products
      }
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case ADD_QUANTITY:
      return {
        ...state,
        products: updateOrderQuantity(state.products, action)
      }
    case OPEN_MODAL:
      return {
        ...state,
        showModal: true
      }
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false
      }
    case CHANGE_DEFAULT_VOLUME:
      return {
        ...state,
        products: updateDefaultVolume(state.products, action)
      }
    default: 
      return state;
  }
}

const updateOrderQuantity = (products, action) => {
  return products.map(item => {
    if (item._id !== action.id) { return item }

    return {
      ...item,
      orderQuantity: (action.buttonType === -1 && item.orderQuantity + action.buttonType * item.defaultVolume <= item.minQuantity) ? 
        item.minQuantity : 
        item.orderQuantity + action.buttonType * item.defaultVolume
    }
  })
}

const updateDefaultVolume = (products, action) => {
  return products.map(item => {
    if (item._id !== action.id) { return item }
      
    return {
      ...item,
      defaultVolume: (action.buttonType === -1 && item.defaultVolume + action.buttonType * item.minQuantity <= item.minQuantity) ?
        item.minQuantity :
        item.defaultVolume + action.buttonType * item.minQuantity
    }
  })
}

export default orderGuide;