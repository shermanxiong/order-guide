import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../css/App.css';
import OrderGuideContainer from '../containers/OrderGuideContainer';
import { fetchProducts } from '../actions';
import ModalContainer from '../containers/ModalContainer';

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div className="App">
          <OrderGuideContainer />
          <ModalContainer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchProducts
}

export default connect(null, mapDispatchToProps)(App);
