import React from 'react';
import AddressItem from "./addressItem";

class AddressBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addressModels: []
    }
  }

  renderAddressItems() {
    this.state.addressModels.map(address => <AddressItem address={address} key={address.addressIdentifier}/>);
  }

  render() {
    return (
      <div>
        <h1>My Addresses</h1>
        {this.renderAddressItems()}
      </div>
    )
  }
}
export default AddressBook;