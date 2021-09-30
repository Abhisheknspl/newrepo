import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User';

function App() {
  return (
    <div className='px-4'>
      <Router >
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">Users</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" to="/register">Register</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/login">Log In</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='px-5'>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/register' component={Register}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/user' component={User}></Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
