import React from 'react';
import { Link } from 'react-router-dom';

const AddressItem = (props) => {
  let {firstName, lastName, line1, line2, city, state, zipCode, phone} = props;
  // mask phone

  return (
    <div id={"addressItem"}>
      <h3>{`${firstName} ${lastName}`}</h3>
      <h4>{line1}</h4>
      <h4>{line2}</h4>
      <h4>{`${city}, ${state} ${zipCode}`}</h4>
      <h4>{phone}</h4>

      <div id={"links"}>
        <Link to={"/edit"}>Edit Address</Link>
        {'|'}
        <Link to={"/delete"}>Delete</Link>
      </div>
    </div>
  )
};

export default AddressItem;