import React from 'react';

class CreditCardBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardModels: []
    };
  }

  renderCreditCardItems() {
    this.state.cardModels.map(card => <CreditCardItem card={card} key={card.cardIdentifier}/>);
  }

  render() {
    return (
      <div>
        <h1>My Credit Cards</h1>
        {this.renderCreditCardItems()}
      </div>
    )
  }
}

export default CreditCardBook;