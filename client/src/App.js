// import { Route, Switch } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';
// import MainPage from './pages/MainPage';
// import MyPage from './pages/MyPage';
// import PostPage from './pages/PostPage';
// import SignUpPage from './pages/SignUpPage';
// import WritePage from './pages/WritePage';

// function App() {
//   return (
//     <Switch>
//       <Route component={LoginPage} path="/" exact />
//       <Route component={MainPage} path="/main" />
//       <Route component={SignUpPage} path="/signUp" />
//       <Route component={WritePage} path="/write" />
//       <Route component={MyPage} path="/mypage" />
//       <Route component={PostPage} path="/:id" />
//     </Switch>
//   );
// }

// export default App;

import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      host : '',
    }
  }

  componentDidMount() {
    this._getHost();
  }

  _getHost = async() => {
    const res = await axios.get('/api/host');
    this.setState({ host : res.data.host })
  }

  render() {
    return(
      <div className='App'>
        <h3> Welcome to <u> {this.state.host} </u> Blog! </h3>
      </div>
    )
  }
}

export default App;