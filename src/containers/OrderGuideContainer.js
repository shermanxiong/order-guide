import { connect } from 'react-redux';
import OrderGuide from './../components/OrderGuide';  

const mapStateToProps = state => {
  const { products, error } = state;
  return {
    products: products,
    error: error
  };
}

export default connect(mapStateToProps)(OrderGuide);