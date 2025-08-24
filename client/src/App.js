import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import CreatePetPage from './pages/CreatePetPage/CreatePetPage';
import PetsListPage from './pages/PetsListPage/PetsListPage';

function App() {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/pet/create">Add Pet</Link>
            </li>
            <li>
              <Link to="/pets">Pets List</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
            HOME
          </Route>
          <Route path="./pet/create">
            <CreatePetPage />
          </Route>
          <Route path="/pets">
            <PetsListPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
