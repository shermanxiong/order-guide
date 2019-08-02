import React from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonContainer from './ButtonContainer';
import { closeModal } from '../actions';
import Table from './../components/Table'

const MODAL_COL_NAMES = [
  'PRODUCT',
  'DEFAULT VOLUME',
  'DELIVERY DAYS',
  'DELETE'
]

const ModalContainer = ({ products, showModal }) => {
  return (
    <ReactModal isOpen={ showModal } ariaHideApp={false}>
      <ButtonToolbar>
        <ButtonContainer variant="primary" size="lg" text='Add Product' />
        <ButtonContainer variant="danger" size="lg" text='Delete List' />
      </ButtonToolbar>
      <Table rows={ products } colnames={ MODAL_COL_NAMES } modal={ showModal } />
      <ButtonToolbar>
        <ButtonContainer variant="outline-secondary" size="lg" onClick={ closeModal } text='Close' />
        <ButtonContainer variant="primary" size="lg" onClick={ closeModal } text='Submit' />
      </ButtonToolbar>
    </ReactModal>
  )
}

const mapStateToProps = state => {
  const { showModal, products } = state;
  return ({
    showModal: showModal,
    products: products
  })
}

export default connect(mapStateToProps)(ModalContainer);