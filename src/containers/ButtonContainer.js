import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

const ButtonContainer = props => {
  const { variant, size, text, onClick, className } = props;
  return (
    <Button
      className= { className }
      variant={ variant }
      size={ size }
      onClick={ onClick ? onClick : null }
    >{ text }</Button>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => ownProps.onClick ? dispatch(ownProps.onClick( ownProps )) : null
})

export default connect(null, mapDispatchToProps)(ButtonContainer);