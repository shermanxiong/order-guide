import React from 'react';
import Header from './Header';
import Table from './Table';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ButtonContainer from '../containers/ButtonContainer';
import { openModal } from './../actions';

const HEADER = 'Menu Order Guide';
const EDIT_BUTTON = 'Edit Guide';
const ORDER_BUTTON = 'Place Order';
const COL_NAMES = [
    'PRODUCT',
    'PRICE',
    'QUANTITY',
    'LEAD TIME'
];

const OrderGuide = ({ products, showModal }) => (
    <div>
        <Header text={ HEADER }/>
        <Table rows={ products } colnames={ COL_NAMES } modal={ showModal } />
        <div className='bottom-row'>
            <div className='col'></div>
            <ButtonToolbar className='col'>
                <ButtonContainer variant="outline-secondary" size="lg" onClick={ openModal } text={ EDIT_BUTTON } />
                <ButtonContainer variant="primary" size="lg" text={ ORDER_BUTTON } />
            </ButtonToolbar>
        </div>
    </div>
)

export default OrderGuide;