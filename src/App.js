import { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users?client_id = 
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_server = ${process.env.REACT_APP_GITHUB_CLIENT_SERVER}`);

    this.setState({ users: res.data, loading: false });
  }
  // setting environemt will let us not to run out of requests that we can make
  // to gitbhub.

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search/>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;