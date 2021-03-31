import './App.css';
import IssueList from './components/IssueList';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import IssueDetail from './components/IssueDetail';
import Users from './components/Users';

function App() {
  return (
    <>
    <Router>
    <div className="App">
      <Link to="/"><h1 className="title">Github Issues</h1></Link>
      <Link to="/user"><h2 className="title">User Search</h2></Link>
    </div>
    <Switch>
      <Route path='/' exact>
        <IssueList />
      </Route>
      <Route path='/issue/:issueNumber'>
        <IssueDetail />
      </Route>
      <Route path='/user'>
        <Users />
      </Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
