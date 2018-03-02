import React from 'react';

class LoginInformation extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: '', errorMessage: '' };

    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleTextBlur = this.handleTextBlur.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleTextInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleTextBlur(e) {
    let key = e.target.name;
    let value = e.target.value;
    // TODO: error handling
    // this.setState({ errorMessage: })
  }


  handleFormSubmit(e) {
    e.preventDefault();
    // TODO: depending on state, do something about it
  }

  render() {
    return (
      <form id={'loginInformation'} onSubmit={this.handleFormSubmit}>
        <label>Email
          <input
            type={'email'}
            onChange={this.handleTextInput}
            name={'email'}
            value={this.state.email}
            onBlur={this.handleTextBlur}
          />
        </label>
        <button type={'button'}>Save Changes</button>
      </form>
    )
  }
}

export default LoginInformation;