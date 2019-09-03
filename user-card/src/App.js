import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {}
    };
  };

  componentDidMount() {
    axios.get('https://api.github.com/users/taranmneeld')
      .then(res => this.setState({
        user: res
      }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {console.log(this.state.user)}
      </div>
    );
  }
}

export default App;