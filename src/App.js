import { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import SingleUser from './components/users/SingleUser'

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  };

  // for searching github users
  searchUsers = async (text) => {
    try {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}`
      );
      this.setState({ users: res.data.items, loading: false });
    } catch (error) {
      console.log(error);
    }
  };

  // this is for clearning the users from the state
  clearUsers = () => this.setState({ users: [], loading: false });

  // this is for the submission pressed without typing which will show error for
  // empty input
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(()=>{this.setState({alert:null})}, 4000)
  }

  // Get single Github user
  getUser = async (username) => {
     try {
      const res = await axios.get(
        `https://api.github.com/users?q=${username}`
      );
       this.setState({ user: res.data, loading: false });
       console.log(res.data)
    } catch (error) {
      console.log(error);
     }
    console.log(username);
  };
  
  render() {
    const { users, loading, user } = this.state;
    return (
      <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
            <Alert alert={this.state.alert} />
            
            <Switch>
              <Route exact path='/' render={props => (
                <>
                 <Search
                  searchUsers={this.searchUsers}
                  clearUsers={this.clearUsers}
                  showClear={users.length > 0 ? true : false}
                  setAlert = {this.setAlert}
                />
                <Users loading={loading} users={users} />
                </>
              )} />
              
              <Route exact path='/about' component = {About} />
            </Switch>
          
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
