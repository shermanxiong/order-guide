import React from 'react';
import Product from './Product';

const Table = ({ rows, colnames, modal }) => {
  return (
    <table className='table'>
      <tbody>
        {
          colnames &&
          <tr>
            { colnames.map((value, index) => <th key={ index }>{ value }</th>) }
          </tr>
        }
        { 
          rows.map(product =>
            <Product
              product={ product }
              modal={ modal }
            />
          )
        }
      </tbody>
    </table>
  )
}

export default Table;