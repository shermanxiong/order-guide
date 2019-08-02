import React from 'react';
import ButtonContainer from '../containers/ButtonContainer';
import { addQuantity, changeDefaultVolume } from '../actions';

const MINUS = -1;
const PLUS = 1;

const Product = ({ product, modal }) => {
  const { 
    _id,
    leadTime,
    name,
    sellingPrice,
    orderQuantity,
    unitQuantity,
    deliveryDays,
    defaultVolume
  } = product;

  return (!modal) ? (
    <tr>
      <td>{ name }</td>
      <td>${ sellingPrice }/{ unitQuantity.toUpperCase() }</td>
      <td>
        <ButtonContainer 
          variant='outline-primary' 
          size='sm' 
          className='btn-counter'
          onClick={ addQuantity }
          id={ _id }
          counter={ MINUS }
          text='-'
        />
        { orderQuantity }{ unitQuantity.toUpperCase() }
        <ButtonContainer 
          variant='outline-primary' 
          size='sm' 
          className='btn-counter'
          onClick={ addQuantity }
          id={ _id }
          counter={ PLUS }
          text='+'
        />
      </td>
      <td>{ leadTime } Days</td>
    </tr>
  ) :
  (
    <tr>
      <td>{ name }</td>
      <td>
        <ButtonContainer 
          variant='outline-primary' 
          size='sm' 
          className='btn-counter'
          onClick={ changeDefaultVolume }
          id={ _id }
          counter={ MINUS }
          text='-'
        />
        { defaultVolume }{ unitQuantity.toUpperCase() }
        <ButtonContainer 
          variant='outline-primary' 
          size='sm' 
          className='btn-counter'
          onClick={ changeDefaultVolume }
          id={ _id }
          counter={ PLUS }
          text='+'
        />
      </td>
      <td>
        {
          Object.keys(deliveryDays)
            .filter(key => deliveryDays[key] === true)
            .join('/')
        }
      </td>
      <td>
        <ButtonContainer
        variant='outline-danger'
        size='sm'
        text='DELETE'
        />
      </td>
    </tr>
  )
}

export default Product;