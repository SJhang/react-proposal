import React from 'react';

class AddressBookForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      line1: '',
      phone: '',
      zipCode: '',
      errorMessage: ''
    };

    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleTextBlur = this.handleTextBlur.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleTextInput(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleTextBlur(e) {
    let key = e.target.name;
    let value = e.target.value;
    // TODO: error handling
    // this.setState({ errorMessage: })
  }

  handleProCheckBox() {
    this.setState({isProCustomer: !this.state.isProCustomer});
  }

  handleFormSubmit(e) {
    e.preventDefault();
    // TODO: depending on state, do something about it
  }

  render() {
    return (
      <form id={"addressBookForm"} onSubmit={this.handleFormSubmit}>
        <h1>Edit Address</h1>
        <label>First Name
          <input
            type={'text'}
            onChange={this.handleTextInput}
            name={"firstName"}
            value={this.state.firstName}
            onBlur={this.handleTextBlur}
          />
        </label>

        <label>Last Name
          <input
            type={'text'}
            onChange={this.handleTextInput}
            name={"lastName"}
            value={this.state.lastName}
            onBlur={this.handleTextBlur}
          />
        </label>

        <label>Address
          <input
            type={'text'}
            onChange={this.handleTextInput}
            name={"line1"}
            value={this.state.line1}
            onBlur={this.handleTextBlur}
          />
        </label>

        <label>Mobile Number(optional)
          <input
            type={'number'}
            onChange={this.handleTextInput}
            name={"phone"}
            value={this.state.phone}
            onBlur={this.handleTextBlur}
          />
        </label>

        <label>Zip Code
          <input
            type={'number'}
            onChange={this.handleTextInput}
            name={"zipCode"}
            value={this.state.zipCode}
            onBlur={this.handleTextBlur}
          />
        </label>

        <button type={"button"}>Save Changes</button>
      </form>
    )
  }
}

export default AddressBookForm;