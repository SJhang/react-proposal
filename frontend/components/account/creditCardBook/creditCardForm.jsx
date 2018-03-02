import React from 'react';

class CreditCardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nickName: '',
      cardHolder: '',
      cardType: '',
      cardNumber: '',
      expirationMonth: '',
      expirationYear: '',
      billingAddress: null,
      errorMessage: ''
    };

    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleTextBlur = this.handleTextBlur.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handleSelectCardType = this.handleSelectCardType.bind(this);
    this.handleSelectMonth = this. handleSelectMonth.bind(this);
    this.handleSelectYear = this.handleSelectYear.bind(this);
    this.handleSelectBillingAddress = this.handleSelectBillingAddress.bind(this);
  }

  componentWillReceiveProps() {
    // might need to pre populate the form with the values if we are rendering this page to edit the existing data in the backend.
  }

  handleTextInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleTextBlur(e) {
    let key = e.target.name;
    let value = e.target.value;

    // TODO: error handling
    // this.setState({errorMessage: })
  }

  handleSubmitForm(e) {
    e.preventDefault();

    // TODO: depending on the state, do a POST call ( this could be either edit or create )
  }

  handleSelectCardType(e) {
    this.setState({cardType: e.target.value});
  }

  handleSelectMonth(e) {
    this.setState({expirationMonth: e.target.value});
  }

  handleSelectYear(e) {
    this.setState({expirationYear: e.target.value});
  }

  handleSelectBillingAddress(e) {
    this.setState({billingAddress: e.target.value});
  }

  renderBillingAddresses() {
    this.state.billingAddresses.map(address => {
      return (
        <div
          key={address.addressIdentifier}
          value={`${address.line1}`}
        >
          {address.line1}
          </div>
      );
    });
  }

  render() {
    return (
      <form id={'creditCardForm'} onSubmit={this.handleSubmitForm}>
        <h1>New Credit Card</h1>
        <label>Card Nickname (optional)
          <input
            type={'text'}
            onChange={this.handleTextInput}
            name={'nickName'}
            onBlur={this.handleTextBlur}
          />
        </label>

        <label>Name on Card
          <input
            type={'text'}
            onChange={this.handleTextInput}
            name={'cardHolder'}
            onBlur={this.handleTextBlur}
          />
        </label>

        <label>Card Type
          <select defaultValue={'Select a Card'} onChange={this.handleSelectCardType}>
            <option value={'americanExpress'}>American Express</option>
            <option value={'discover'}>Discover</option>
            <option value={'mastercard'}>Mastercard</option>
            <option value={'visa'}>Visa</option>
            <option value={'homeDepotCustomerCard'}>Home Depot Customer Card</option>
            <option value={'homeDepotCommercial'}>Home Depot Commercial</option>
          </select>
        </label>

        <label>Card Number
          <input
            type={'number'}
            onChange={this.handleTextInput}
            name={'cardNumber'}
            onBlur={this.handleTextBlur}
          />
        </label>

        <label>Expiration Month
          <select defaultValue={'Month'} onChange={this.handleSelectMonth}>
            <option value={'jan'}>January</option>
            <option value={'feb'}>February</option>
            <option value={'mar'}>March</option>
            <option value={'apr'}>April</option>
            <option value={'may'}>May</option>
            <option value={'june'}>June</option>
            <option value={'july'}>July</option>
            <option value={'aug'}>August</option>
            <option value={'sep'}>September</option>
            <option value={'oct'}>October</option>
            <option value={'nov'}>November</option>
            <option value={'dec'}>December</option>
          </select>
        </label>

        <label>Expiration Year
          <select defaultValue={'Year'} onChange={this.handleSelectYear}>
            <option value={'2018'}>2018</option>
            <option value={'2019'}>2019</option>
          </select>
        </label>

        <label>Billing Address
          <select defaultValue={'Select an Address'} onChange={this.handleSelectBillingAddress}>
            {this.renderBillingAddresses}
          </select>
        </label>

        <button type={'button'}>Save</button>
      </form>
    )
  }
}

export default CreditCardForm;