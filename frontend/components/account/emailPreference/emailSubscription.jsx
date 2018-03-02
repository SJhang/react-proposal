import React from 'react';

class EmailSubscription extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeDepot: false,
      localAd: false,
      pro: false,
      specialBuy: false,
      gardenClub: false,
      styleNDecor: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    let name = e.target.name;

    this.setState({[name]: value});
  }

  handleSubmitForm(e) {
    e.preventDefault();

    // TODO: with the local state, do the submit call or update
  }

  render() {
    return (
      <form id={'emailSubscriptionForm'} onSubmit={this.handleSubmitForm}>
        <h1>Now Choose Your Subscriptions</h1>
        <h3>
          Let us know which emails you'd like to receive for great deals and project ideas. Not sure?
          You can update your choices anytime from your My Account page.
        </h3>

        <label>
          <input
            name={'homeDepot'}
            type={'checkbox'}
            checked={this.state.homeDepot}
            onChange={this.handleInputChange}
          />
        </label>

        <br/>

        <label>
          <input
            name={'localAd'}
            type={'checkbox'}
            checked={this.state.localAd}
            onChange={this.handleInputChange}
          />
        </label>

        <br/>

        <label>
          <input
            name={'pro'}
            type={'checkbox'}
            checked={this.state.pro}
            onChange={this.handleInputChange}
          />
        </label>

        <br/>

        <label>
          <input
            name={'specialBuy'}
            type={'checkbox'}
            checked={this.state.specialBuy}
            onChange={this.handleInputChange}
          />
        </label>

        <br/>

        <label>
          <input
            name={'gardenClub'}
            type={'checkbox'}
            checked={this.state.gardenClub}
            onChange={this.handleInputChange}
          />
        </label>

        <br/>

        <label>
          <input
            name={'styleNDecor'}
            type={'checkbox'}
            checked={this.state.styleNDecor}
            onChange={this.handleInputChange}
          />
        </label>

        <button type={'button'}>Subscribe</button>
      </form>
    )
  }
}

export default EmailSubscription;