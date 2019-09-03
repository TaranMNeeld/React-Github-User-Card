import React from "react";
import axios from "axios";
import "./App.css";
import UserCard from "./components/UserCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/taranmneeld")
      .then(res => this.setState({
        user: res.data
      }))
      .catch(err => console.log(err));
      axios.get("https://api.github.com/users/taranmneeld/followers")
      .then(res => this.setState({
        followers: res.data
      }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        {console.log(this.state.followers)}
        {<UserCard
          key={this.state.user.id}
          imgUrl={this.state.user.avatar_url}
          name={this.state.user.name}
          username={this.state.user.login}
          bio={this.state.user.bio}
          profile={this.state.user.blog}
        />}
        {this.state.followers.map(follower => {
          return <UserCard
          key={follower.id}
          imgUrl={follower.avatar_url}
          username={follower.login}
          profile={follower.html_url}
        />
        })}
      </div>
    );
  }
}

export default App;