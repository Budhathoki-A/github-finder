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

   
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(`https://api.github.com/users?client_id = 
  //   ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_server = ${process.env.REACT_APP_GITHUB_CLIENT_SERVER}`);

  //   this.setState({ users: res.data, loading: false });
  // }

   // for searching github users
   searchUsers = async text => {
     try {
       const res = await axios.get(
         `https://api.github.com/search/users?q=${text}`);
       this.setState({ users: res.data.items, loading: false });
     } catch(error) {
       console.log(error);
     }
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search searchUsers ={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;

