import './App.css';
import Navbar from './components/Navbar/Navbar';
import CardContainer from './components/Contacts/CardContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={CardContainer} />
      </Switch>
    </Router>
  );
}

export default App;
